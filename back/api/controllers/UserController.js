/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    login: async (req, res) => {
        let mobile = req.body.data.mobileNo;
        let pass = req.body.data.password;
        try {
            let existUser = await User.find({ mobile: mobile, passwordHash: pass });
            console.log(existUser.length);
            if (existUser.length > 0) {
                return res.json({ status: true, token: existUser[0].token });
            } else {
                return res.json({ status: false, msg: 'No se encuentra registrado un usuario con el numero de telefono: ' + mobile })
            }
        } catch (error) {
            console.log(error);
            return res.json({ status: false, msg: 'Fallo interno del servidor' })
        }
    },

    register: async (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        let firstName = req.body.firstName;
        let mobile = req.body.mobileNo;
        let lastName = req.body.lastName;
        let emailverification = await User.find({ email: email });
        if (emailverification.length > 0) {
            return res.json({ status: false, msg: 'Ya existe un usuario registrdo con el email proporcionado' });
        }
        let mobileVerification = await User.find({ mobile: mobile });
        if (mobileVerification.length > 0) {
            return res.json({ status: false, msg: 'Ya existe un usuario registrdo con el numero de telefono proporcionado' });
        }
        let token = Math.random().toString(36).slice(2);
        console.log(token);
        let newUser = await User.create({ firstName: firstName, lastName: lastName, mobile: mobile, email: email, passwordHash: password, token: token }).fetch();
        console.log(newUser);
        return res.json({ status: true, msg: 'Usuario creado correctamente' });
    }
};


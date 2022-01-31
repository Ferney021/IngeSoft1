/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async (req, res) => {
      let email = req.body.email;
      let pass = req.body.password;
      try {
          let existUser = user.findOne({email: email, passwordHash: pass});
          if(existUser) {
              return res.json({status: true, token: existUser.token});
          }
      } catch (error) {
          console.log(error);
          return res.json({status: false, msg: 'Fallo interno del servidor'})
      }
    }
};


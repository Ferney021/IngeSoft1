/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getPageProducts: async (req, res) => {
        console.log(req.query);
        let page = req.query.page;
        let prods = await Product.find({}).limit(9).skip(9 * page);
        for(let prod of prods) {
            prod.img = 'https://picsum.photos/200';
            prod.link = '/product/detail'
        }
        return res.json({status: true, prods: prods});
    }

};


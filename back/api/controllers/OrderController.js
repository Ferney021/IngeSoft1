/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getData: async (req, res) => {
      let categories = await Category.find({});
      console.log(categories);
      let sql = "select o.productId, c.categoryId, p.title, sum(o.quantity) as cantidad from order_item o join product p on o.productId = p.id join product_category c on o.productId = c.productId group by o.productId, p.title";
      let info = await OrderItem.getDatastore().sendNativeQuery(sql);
      info = info.rows;
      console.log(info);
      let obj = {
          name: "Info ventas",
          children: []
      }
      for(let cat of categories) {
          objCat = {
              name: cat.title,
              children: [],
          }
          let prodsInCat = info.filter((prod) => prod.categoryId == cat.id);
          for(let prod of prodsInCat) {
              prodObj = {
                  name: prod.title,
                  value: prod.cantidad
              }
              objCat.children.push(prodObj);
          }

          obj.children.push(objCat);
      }

      console.log(obj.children[0]);

      return res.json({
          status: true,
          info: obj,
      })
  }

};


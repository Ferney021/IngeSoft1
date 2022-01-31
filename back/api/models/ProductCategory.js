/**
 * ProductCategory.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'product_category',
  primaryKey: 'productId',
  primaryKey: 'categoryId',
  attributes: {
    productId: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
    categoryId: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },

  },

};


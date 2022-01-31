/**
 * ProductMeta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'product_meta',
  primaryKey: 'id',
  attributes: {
    id: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
    productId: {type: 'number', columnType: 'bigint'},
    key: {type: 'string'},
    content: {type: 'string'}
  },

};


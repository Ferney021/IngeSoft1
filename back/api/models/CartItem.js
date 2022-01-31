/**
 * CartItem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'cart_item',
  primaryKey: 'id',
  attributes: {
    id: {
      id: {type: 'number', columnType: 'bigint', autoIncrement: true, unique: true},
      productId: {type: 'number', columnType: 'bigint'},
      cartId: {type: 'number', columnType: 'bigint'},
      sku: {type: 'string'},
      price: {type: 'number', columnType: 'float'},
      discount: {type: 'number', columnType: 'float'},
      quantity: {type: 'number', columnType: 'smallint'},
      active: {type: 'number', columnType: 'tinyint'},
      createdAt: {type: 'ref', columnType: 'datetime'},
      updatedAt: {type: 'ref', columnType: 'datetime'},
      content: {type: 'string'}
    }
  }
};


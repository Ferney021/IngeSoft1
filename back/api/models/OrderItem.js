/**
 * OrderItem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'order_item',
  primaryKey: 'id',
  attributes:{
    id: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
    productId: {type: 'number', columnType: 'bifint'},
    orderId: {type: 'number', columnType:'bifint'},
    sku: {type: 'string'},
    price: {type: 'number', columnType: 'float'},
    discount: {type: 'number', columnType: 'float'},
    quantity: {type: 'number', columnType: 'smallint'},
    createdAt: {type: 'ref', columnType: 'datetime'},
    updatedAt: {type: 'ref', columnType: 'datetime'},
    content: {type: 'string'},
  }

};


/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'User',
  primaryKey: 'id',
  atributes: {
    id: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
    userId: {type: 'number', columnType: 'bigint'},
    sessionId: {type: 'string'},
    token: {type: 'string'},
    status: {type: 'number', columnType: 'smallint'},
    subTotal: {type: 'number', columnType: 'float'},
    itemDiscount: {type: 'number', columnType: 'float'},
    tax: {type: 'number', columnType: 'float'},
    shipping: {type: 'number', columnType: 'float'},
    total: {type: 'number', columnType: 'float'},
    promo: {type: 'string'},
    discount: {type: 'number', columnType: 'float'},
    grandTotal: {type: 'number', columnType: 'float'},
    firstName: {type: 'string'},
    middleName: {type: 'string'},
    lastName: {type: 'string'},
    mobile: {type: 'string'},
    email: {type: 'string'},
    line1: {type: 'string'},
    line2: {type: 'string'},
    city: {type: 'string'},
    province: {type: 'string'},
    country: {type: 'string'},
    createdAt: {type: 'ref', columnType: 'datetime'},
    updatedAt: {type: 'ref', columnType: 'datetime'},
    content: {type: 'string'},
  },

};


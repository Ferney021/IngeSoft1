/**
 * Cart.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName : 'cart',
  primaryKey : 'id',
  attributes : {
    id: {type: 'number', columnType: 'bigint', autoIncrement: true, unique: true},
    userid: {type: 'number', columnType: 'bigint'},
    sessionId : {type: 'string'},
    token: {type: 'string'},
    status: {type: 'number', columnType: 'smallint'},
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


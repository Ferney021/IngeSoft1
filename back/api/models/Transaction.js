/**
 * Transaction.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'transaction',
  primaryKey: 'id',
  attributes: {
    id: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
    userId: {type: 'number', columnType: 'bigint'},
    orderId: {type: 'number', columnType: 'bigint'},
    code: {type: 'number', columnType: 'smallint'},
    type: {type: 'number', columnType: 'smallint'},
    mode: {type: 'number', columnType: 'smallint'},
    status: {type: 'number', columnType: 'smallint'},
    createdAt: {type: 'ref', columnType: 'datetime'},
    updatedAt: {type: 'ref', columnType: 'datetime'},
    content: {type: 'string'},
  },

};


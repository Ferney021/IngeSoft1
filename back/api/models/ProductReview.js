/**
 * ProductReview.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'product_review',
  primaryKey: 'id',
  attributes: {
    id: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
    productId: {type: 'number', columnType: 'bigint'},
    title: {type: 'string'},
    rating: {type: 'number', columnType: 'smallint'},
    published: {type: 'number', columnType: 'tinyint'},
    createdAt: {type: 'ref', columnType: 'datetime'},
    publishedAt: {type: 'ref', columnType: 'datetime'},
    content: {type: 'string'},
  },

};


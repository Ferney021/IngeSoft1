/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Product',
  primaryKey: 'id',
  attributes: {
    id: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
    title: { type: 'string' },
    metaTitle: { type: 'string' },
    slug: { type: 'string' },
    summary: { type: 'string', columnType: 'tinytext' },
    type: { type: 'number', columnType: 'smallint' },
    sku: { type: 'string' },
    price: { type: 'number', columnType: 'float' },
    discount: { type: 'number', columnType: 'float' },
    quantity: { type: 'number', columnType: 'smallint' },
    shop: { type: 'number', columnType: 'tinyint' },
    createdAt: { type: 'ref', columnType: 'datetime' },
    updatedAt: { type: 'ref', columnType: 'datetime' },
    publishedAt: { type: 'ref', columnType: 'datetime' },
    startsAt: { type: 'ref', columnType: 'datetime' },
    endsAt: { type: 'ref', columnType: 'datetime' },
    content: { type: 'string', columnType: 'text' },
  },

};


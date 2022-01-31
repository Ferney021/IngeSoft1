/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'category',
    primaryKey: 'id',
    attributes:{
      id: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
      parentId: {tyoe: 'number', columnType: 'bigint'},
      title: {type: 'string'},
      metaTitle: {type: 'string'},
      slug: {type: 'string'},
      content: {type: 'string'}
    }
};


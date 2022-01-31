/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'User',
    primaryKey: 'id',
    attributes: {
        id: { type: 'number', columnType: 'bigint', autoIncrement: true, unique: true },
        firstName: { type: 'string' },
        middleName: { type: 'string' },
        lastName: { type: 'string' },
        mobile: { type: 'string' },
        email: { type: 'string' },
        passwordHash: { type: 'string' },
        registeredAt: { type: 'ref', columnType: 'datetime' },
        lastLogin: { type: 'ref', columnType: 'datetime' },
        intro: { type: 'string' },
        profile: { type: 'string' },
        token: { type: 'string' },
    },
};
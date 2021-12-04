/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  
  attributes: {

    name: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    isDeleted:{
      type:'boolean',
      defaultsTo: false
    },
    contacts: {
      collection: 'usercontacts',
      via: 'users'
    }

  },

};


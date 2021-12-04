/**
 * UserContacts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "user_contacts",
  attributes: {

    email: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    address_line_one: {
      type: 'string',
      required: true
    },
    address_line_two: {
      type: 'string'
    },
    city: {
      type: 'string',
      required: true
    },
    state: {
      type: 'string',
      required: true
    },
    country: {
      type: 'string',
      required: true
    },
    zip: {
      type: 'string',
      required: true
    }

  },

};


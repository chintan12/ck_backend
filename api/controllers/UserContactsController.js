/**
 * UserContactsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: function (req, res) {
        let data;
        
        data = { 
            email: req.body.email,
            phone: req.body.phone,
            address_line_one: req.body.address_line_one,
            address_line_two: req.body.address_line_two,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            country: req.body.country,
            users: req.body.users,
        }
        
        UserContacts.create(data).fetch().exec(function (err, category) {
            if (err) return (err);
            return res.json(category);
        });

    },

    list: function (req, res) {
        let userId = req.param('user');
        
        UserContacts.find({
            where: {
                users: userId
            }
        }).exec(function (err, result) {
            if (err) return (err);
            return res.json(result);
        });
        
    },

    deleteone: function (req, res) {
        
        let valuesToSet;
        valuesToSet = { 
            isDeleted: true
        }

        let criteria = {
            id: req.param('id').split(',')
        }
        
        UserContacts.update(criteria).set(valuesToSet).exec(function (err, category) {
            if (err) return (err);
            return res.json(category);
        });
        
    },

}


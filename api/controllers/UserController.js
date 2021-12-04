/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {

    list: function (req, res) {
        User.find().populate('contacts').exec(function (err, result) {
            if (err) return (err);
            return res.json(result);
        });
    },

    findOne: function (req, res) {
        User.findOne({
            id: req.param('id')
        }).exec(function (err, result) {
            if (err) return (err);
            return res.json(result);
        });
    },

    create: function (req, res) {
        let data;
        data = { 
            name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
            email: req.body.email,
            password: req.body.password 
        }
        
        User.create(data).fetch().exec(function (err, category) {
            if (err) return (err);
            return res.json(category);
        });
    },

    updateone: function (req, res) {
        let valuesToSet;
        valuesToSet = { 
            name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
            email: req.body.email,
            password: req.body.password 
        }

        let criteria = {
            id: req.param('id')
        }
        
        User.updateOne(criteria).set(valuesToSet).exec(function (err, category) {
            if (err) return (err);
            return res.json(category);
        });
    },

    softDelete: function (req, res) {
        let valuesToSet;
        valuesToSet = { 
            isDeleted: true
        }

        let criteria = {
            id: req.param('id').split(',')
        }
        
        User.update(criteria).set(valuesToSet).exec(function (err, category) {
            if (err) return (err);
            return res.json(category);
        });
    },

    deleteone: function (req, res) {
        let criteria = {
            id: req.param('id')
        }
        
        User.destroyOne(criteria).exec(function (err, category) {
            if (err) return (err);
            return res.json(category);
        });
    },

};


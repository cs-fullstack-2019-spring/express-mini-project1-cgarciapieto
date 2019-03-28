

var express = require('express');
var router = express.Router();
const heroes = require('../models/heroModel');

router.route('/memphis') ///   sets the endpoint to memphis
    .get(function(req, res) {
        res.send('test get');
    })
    .post(function (req, res) {
        console.log(req.body);
        console.log(`Create:\n ${req.body.id}`);
        heroes.create(req.body).then(function (hero) {
            console.log('created');
            res.render('add', {isSent: true});
        })
    });


//
// router.route('/memphis/:id')  //gets and renders the delete page
//     .get(function(req, res) {
//         res.render('delete')
//
//     })
//     .delete(function(req, res) {
//         res.send('test delete')
//
//
//     })
//     .put(function (req,res) {
//         res.send('test put')
//
//     });



module.exports = router;



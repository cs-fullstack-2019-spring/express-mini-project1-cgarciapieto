
var express = require('express');
var router = express.Router();
const heroes = require('../models/heroModel');

//delete a specific hero by ID
router.get('/delete', (req,res)=>
{
    res.render("delete");
});

router.get('/deletehero/:id', (req, res)=>{
    heroes.deleteOne(
        {
            id: req.query.id,
        }, (error)=>{
            if (error) res.send(error);
            else res.render('delete', {isSent: true});
        }
    )
});

module.exports = router;
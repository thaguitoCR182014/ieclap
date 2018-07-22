const express = require('express');
const router = require('express').Router();
const mongojs=require('mongojs');
const db = mongojs('ieclap',['users']);



//CONSULTA SELECT FROM TODO
router.get('/user', (req, res,next) => {
    db.users.find((err, users) => {
        if(err) return next(err);
        res.json(users);
        //console.log(users);
    });
});


module.exports = router;
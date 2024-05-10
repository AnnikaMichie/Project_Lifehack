const router = require('express').Router();
const { app } = require('apico/server.js');


// users/all
router.get('/all', function(req, res){
    res.json({ message: 'All users' });
});

// users/create
router.post('/create', function(req, res){
    res.json({ message: 'Create user' });
});

// users/update
router.put('/update', function(req, res){
    res.json({ message: 'Update user' });
});

// users/delete
router.delete('/delete', function(req, res){
    res.json({ message: 'Delete user' });
});




app.use( '/usres', router );
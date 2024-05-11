const router  = require('express').Router();
const { app } = require('apico/server');
const mysql = require('mysql2');


// htt://localhost:3000/auth/register "POST"
router.post('/register', async( req, res )=>{

    let { name, email, username, password, conf_password, phone } = req.body;

    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'blog',
        password: 'root123456'
      });
    
      let sql = `inset into user( name, email, username, password, phone ) values( ?, ?, ?, ?, ? )`;
     // 2 sec 
      pool.query(sql, [  name, email, username, password, conf_password, phone ], function(err, posts, fields) {
        if(err) throw err;
        console.log(' posts ',posts);

        res.json({ message: 'User registered successfully' });

      });
});

app.use( '/auth', router );
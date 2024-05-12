const router  = require('express').Router();
const mysql = require('mysql2');
const { app } = require('apico/server'); // Assuming 'apico/server' is correctly imported

// http://localhost:3000/auth/register "POST"
router.post('/registeration', async (req, res) => {

    let { name, email, username, password, repeatpassword, phone } = req.body;

    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'lifehackproject',
        password: 'Sewing1!'
    });

    let sql = `insert into user (name, email, username, password, phone) values (?, ?, ?, ?, ?)`;
    
    pool.query(sql, [name, email, username, password, phone], function(err, results, fields) {
        if(err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('User registered successfully');
            res.json({ message: 'User registered successfully' });
        }
    });
});

app.use('/registration', router);

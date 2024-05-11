const mysql = require('mysql2');

let name = "moha test ";

let posts = [
    {
        id: 1,
        author: "moha",
        title: "Post 1",
        content: "This is post 1"
    },
    {
        id: 2,
        title: "Post 2",
        author: "moha 2",
        content: "This is post 2"
    }
]

function generatePost( p_post )
{
    return `<article class="entry">

    <div class="entry-img">
      <img src="assets/img/blog/blog-1.jpg" alt="" class="img-fluid">
    </div>

    <h2 class="entry-title">
      <a href="blog-single.html"></a>
    </h2>

    <div class="entry-meta">
      <ul>
        <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">saskdl</a></li>
        <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
        <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
      </ul>
    </div>

    <div class="entry-content">
    
    </div>

  </article>`
}

function printPosts()
{
    let html = "" 

    posts.forEach(function(post))


    // fetch from DB
    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root123456',
        database: 'blog',
        port: 3306,

    });

    pool.query('SELECT * FROM post', function (err, posts, fields) {
        if (err) throw err;
        console.log('The solution is: ', posts);
        let html = "";
        posts.forEach( p_post => {
            html += generatePost( p_post );
        });
    
        return html;
    });

    

}
module.exports = {
    name,
    posts,
    printPosts
}
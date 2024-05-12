let btn = document.getElementById('signup-btn');

btn.addEventListener('click', function(event) {

    let firstname = document.getElementById('yourfirstname');
    let lastname = document.getElementById('yourlastname');
    let email = document.getElementById('youremail');
    let username = document.getElementById('yourusername');
    let password = document.getElementById('yourpassword');
    let repeatpassword = document.getElementById('yourrepeatpassword');
    let phone = document.getElementById('yourphonenumber');

    let data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        username: username.value,
        password: password.value,
        repeatpassword: repeatpassword.value,
        phone: phone.value
    };

    fetch('/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.error(err);
    });

});

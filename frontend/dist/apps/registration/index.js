?
let btn = document.getElementById('signup-btn');

btn.addEventListener('click', function( event ){

    let firstname = document.getElementById('yourfirstName');

    let lastname = document.getElementById('yourlastName');

    let email = document.getElementById('youremail');

    let username = document.getElementById('yourusername');

    let password = document.getElementById('yourpassword');

    let repeat_password = document.getElementById('yourepeatpassword');

    let phone = document.getElementById('mobileNumber');

    // let formData = new FormData( document.getElementById('signup-form') );

    let data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        username: username.value,
        password: password.value,
        password: repeatpassword.value,
        phone: phone.value
    }

    fetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( function(response){ 
        return response.json();
    } )
    .then( function(data){
        console.log(data)
    } )
    .catch( function( err ){
        console.error(err)
    } );

})
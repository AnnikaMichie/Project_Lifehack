document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch('https://example.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // assuming server responds with JSON
        })
        .then(data => {
            // Handle the response data here
            responseDiv.textContent = 'Form submitted successfully!';
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            responseDiv.textContent = 'An error occurred while submitting the form.';
            console.error('Fetch error:', error);
        });
    });
});

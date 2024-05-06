
// Function to handle login form submission
async function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Send a POST request to your server
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        // Redirect to dashboard if login is successful
        window.location.href = '/dashboard';
    } catch (error) {
        // Handle errors, such as displaying an error message
        console.error('Login failed:', error.message);
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
}

// Add event listener to login form
document.getElementById('login-form').addEventListener('submit', handleLogin);


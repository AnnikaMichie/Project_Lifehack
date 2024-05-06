// Your app JavaScript code.
// Generate a function to send a form to post/create a new user.
function createUserForm() {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = '/users';
  form.innerHTML = `
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Create User</button>
  `;
  return form;
}
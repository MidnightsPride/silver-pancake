const username = document.querySelector('#username-signup').value.trim();
const email = document.querySelector('#email-signup').value.trim();
const password = document.querySelector('#password-signup').value.trim();

fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));

    document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);


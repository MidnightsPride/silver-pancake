const loginFormHandler = async function(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    fetch("/api/user/login", {
        method: "post",
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  ocument.querySelector('#login-form').addEventListener('submit', loginFormHandler);
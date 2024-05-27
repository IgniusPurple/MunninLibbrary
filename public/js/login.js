document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'home.html';
      } else {
        alert(data.message);
        if (data.redirect) {
          if (confirm('Usuário não encontrado. Deseja se cadastrar?')) {
            window.location.href = 'register.html';
          }
        }
      }
    })
    .catch(error => console.error('Error:', error));
  });
  
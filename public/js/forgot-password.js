document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const newPassword = prompt('Enter your new password:');
  
    fetch('/auth/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, newPassword })
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      if (data.redirect) {
        if (confirm('Email não cadastrado. Deseja se cadastrar?')) {
          window.location.href = 'register.html';
        }
      } else {
        window.location.href = 'login.html';
      }
    })
    .catch(error => console.error('Error:', error));
  });
  
document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var loginData = {
      email: email,
      password: password,
    };
  
    fetch("https://js-course-server.onrender.com/user/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.message) {
          alert("Email ili sifra nisu tacni");

        } else {
          alert("Prijava uspesna!");
          //window.location.href="signup.html";
          localStorage.setItem("auth_token",data.token);
          localStorage.setItem("userId",data.userId);
        }
      });
  });
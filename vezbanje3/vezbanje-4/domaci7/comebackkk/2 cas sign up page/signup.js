document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var fullName = document.getElementById("fullName").value;
  
    var loginData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      fullName: fullName,
    };
  
    fetch("https://js-course-server.onrender.com/user/signup", {
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
       if(data.userId){

        alert("Uspesna registracija")
        window.location.href="login.html";
       }
       else{
        alert("Neuspesna registracija")
       }
      });
  });

  const urlParams = new URLSearchParams(window.location.search);
const quoteId = urlParams.get("quoteId");
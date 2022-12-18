document.getElementById("calculate").addEventListener("click", function () {
    var randomNumber = Math.random() * 101;
    var intNumber = Math.floor(randomNumber);
  

  
    document.getElementById("result").textContent = intNumber + "%";
    if (randomNumber < 80) {
        document.getElementById("img").src =
        "broken-heart.png"
          
      } else if (randomNumber > 50) {
        document.getElementById("img").src =
          "affection.png";
      } 
    });

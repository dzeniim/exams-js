



/*
//Ovo je prvi nacin preko indexa
var ocene = [];

function pushNumber() {
  var num = +document.getElementById("number").value;
  ocene.push(num);

  document.getElementById("number").value = "";
}

document.getElementById("btnn1").addEventListener("click", function () {
  pushNumber();
});

document.getElementById("number").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pushNumber();
    
  }
});



document.getElementById("so").addEventListener("click", function () { 
    suma=0
   
    for (broj of ocene) {suma= suma+ +broj}
  console.log( "Srednja ocena iznosi :" + suma/ocene.length);
  console.log("Ukupno ocena " + ocene.length)
  console.log("Prva ocena koju je dobio ucenik je: " + ocene[0])
  
});
*/

var ocene= [];
var suma=0;



function pushNumber() {
    var num = +document.getElementById("number").value;
    ocene.push(num);
  
    document.getElementById("number").value = "";
  }
  
  document.getElementById("btnn1").addEventListener("click", function () {
    pushNumber();
  });
  
  document.getElementById("number").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      pushNumber();
      
    }
    
  });

  document.getElementById("so").addEventListener("click", function () { 
    for (var i = 0; i< ocene.length; i++) { suma+=ocene[i]}
    console.log( "Srednja ocena iznosi :" + suma/ocene.length);
    console.log("Ukupno ocena " + ocene.length)
    console.log("Prva ocena koju je dobio ucenik je: " + ocene[0])
    

        
        
    

    });

    document.getElementById("showgrades").addEventListener("click", function () {
    document.getElementById("showgrades").textContent = ocene;});
   
    





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
///
var ocene= [];                             /*deklarisemo(inicijaliziramo niz)*/
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
    
          
    for (var i = 0; i< ocene.length; i++) { 
      suma=suma+ocene[i];
    }
    console.log( "Srednja ocena iznosi :" + suma/ocene.length);
    console.log("Ukupno ocena " + ocene.length);
    console.log("Prva ocena koju je dobio ucenik je: " + ocene[0]);
    var indexposlednjecifre=ocene.length-1;
    console.log("Poslednja ocena koju je dobio ucenik je: " + ocene[indexposlednjecifre]);
    
  
});
document.getElementById("showgrades").addEventListener("click", function () {
document.getElementById("showgrades").textContent = ocene;
       
    

});
 ////
 
 
 
 //////////////////////////////////////////////////////////objasnjenja osnovnih pojmova    
 /*for ([početna vrednost]; [uslov]; [izraz za povećenje]){
  izraz za izvršenje}*/

/*Naziv promenljve je tzv. "identifikatior" i sastoji se od velikih i malih slova engleske abecede, cifara, donje crte (_) i znaka za dolar ($), s tim što ne sme počinjati cifrom. 
Identifikator (u novijim verzijama JavaScripta) može sadržati i slova nacionalnih pisama (npr. š,đ,č...)*/
 /*Niz je složena promenljiva koja sadrži više drugih promenljivih u sebi.
  Svaka promenljiva u nizu ima svoj redni broj (ili indeks, kako ćemo ga zvati u nastavku), pomoću kog se može naći vrednost koja nam treba.*/
/*ako iza imena niza stavimo .length dobićemo koliko ima elemenata u nizu (npr. br.length predstavlja broj elemenata u nizu br). */



/*TABLICA MNOZENJA*/

var i, j;

var tablica = document.getElementById("tablica"); 
for (i = 1; i <= 10; i++) {
  var row = document.createElement("tr"); //create element koristiomo da bismo kreirali novi element logicno...
  var th = document.createElement("th"); 
  th.textContent = i;
  row.appendChild(th);

  for (j = 1; j <= 10; j++) {
    var proizvod = i * j;
    var td = document.createElement("td");
    td.textContent = proizvod;
    row.appendChild(td);
  }

  tablica.appendChild(row);
}


//////////////////za osnovne operacije/////
document.getElementById("plus").addEventListener("click", function () {
  a = +document.getElementById("1br").value;
  b = +document.getElementById("2br").value;
  rezultat = a + b;
  document.getElementById("rezultat").textContent = rezultat;
});

// ODUZMI
document.getElementById("minus").addEventListener("click", function () {
  a = +document.getElementById("1br").value;
  b = +document.getElementById("2br").value;
  rezultat = a - b;
  document.getElementById("rezultat").textContent = rezultat;
});

// PODELI
document.getElementById("deljenje").addEventListener("click", function () {
  a = +document.getElementById("1br").value;
  b = +document.getElementById("2br").value;
  rezultat = a / b;
  document.getElementById("rezultat").textContent = rezultat;
});

// POMNOZI
document.getElementById("mnozenje").addEventListener("click", function () {
  a = +document.getElementById("1br").value;
  b = +document.getElementById("2br").value;
  rezultat = a * b;
  document.getElementById("rezultat").textContent = rezultat;
});

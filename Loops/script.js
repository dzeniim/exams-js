/*var i;

for(var i=1; i<=20 ; i++){
if ( i%3 ==0){
    console.log(i)}
}*/


  

 /*var firstnum=Number;
  var secondnum=Number;
 var k
 for(k=firstnum,secondnum; k<=secondnum; k++){
    if(k%3 ==0){
        console.log(k)
    }
    
 }

 var k;
for (k = 1; k <= 20; k++) {
  if (k % 3 === 0 || k % 2 === 0) {
    console.log(k);
  }
}*/







 var f,s,fizz=0,buzz=0,buzzfizz=0

  document.getElementById("resultbutton").addEventListener("click", function () {
  f = +document.getElementById("firstnum").value;
  s = +document.getElementById("secondnum").value;/* ovo kada se unese broj*/ 

  if (f > s) {
    for (var i = f; i <= s ; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz buzzZ",i);
        buzzfizz++;
      } 
      else if (i % 3 === 0) {
        console.log("Fizz",i) 
        fizz++ }
         else if (i % 5 === 0) {
        console.log("Buzz",i);
        buzz++;
       
      }
    }
  } 
  
  else if (f < s) {
    for (var i = f; i <= s ; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz buzz",i);
        buzzfizz++;
       
      } 
      else if (i % 3 === 0) {
        console.log("Fizz",i) 
        fizz++ }
         else if (i % 5 === 0) {
        console.log("Buzz",i);
        buzz++;
       
    
      }
    }
  }
  document.getElementById("fizz").textContent = fizz;
  document.getElementById("buzz").textContent = buzz;
  document.getElementById("buzzfizz").textContent = buzzfizz;});


 
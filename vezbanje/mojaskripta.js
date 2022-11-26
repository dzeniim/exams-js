/* Napraviti niz koji vraca suprotne brojeve npr ako imam pozitivan da bude negativan i obrnuto*/

var arr = [1, 2, -4, -6, -14, 5, 8, 9];
var newarr = [];



for (var i = 0; i <= arr.length - 1; i++) {
   var izabraniBroj = arr[i]
   if (izabraniBroj >= 0) {
      newarr.push(izabraniBroj * -1)

   }
   if (izabraniBroj < 0) {
      newarr.push(Math.abs(izabraniBroj))

   }


}

console.log(arr)
console.log(newarr)

/* 2. Zadatak
Da od niza datih brojeva vratimo niz koji nam za pozitivne brojeve primarnog niza vraca njihovu duzinu , a za negativne vraca njihov zbir*/
var niz = [1, 2, 4, 6, 7, 8, -11, -24, -56, -33];
var noviniz = [];
var druginiz =[];
var zbirnegativnih=[];
var suma = 0;

for (var i = 0; i <= niz.length; i++) {
   var pozitivni = niz[i]
   var negativni = niz[i]
   if (pozitivni >= 0) {
      noviniz.push(pozitivni)
 }
 if (negativni < 0) {
      druginiz.push(negativni)
      suma += negativni;
      zbirnegativnih.push(suma)
   }
}




console.log("//////////////////2 zadatak///////////////")
console.log(niz)
console.log(noviniz)
console.log("Duzina pozitivnih brojeva je  " + noviniz.length)
console.log(niz)
console.log( druginiz)
console.log(suma)



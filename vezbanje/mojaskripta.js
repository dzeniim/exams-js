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
/*
/* 2. Zadatak
Da od niza datih brojeva vratimo niz koji nam za pozitivne brojeve primarnog niza vraca njihovu duzinu , a za negativne vraca njihov zbir*/
var niz = [1, 2, 4, 6, 7, 8, -11, -24, -56, -33];
var noviniz = [];
var druginiz = [];
var zbirnegativnih = [];
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




console.log("//////////////////2 zadatak//////////////////////////////////////////////////////")
console.log(niz)
console.log(noviniz)
console.log("Duzina pozitivnih brojeva je  " + noviniz.length)
console.log(niz)
console.log(druginiz)
console.log(suma)*/






/*  3.Zadatak
Od datog niza da izdvojim razlike izmedju datih brojeva i odredim njihov zbir 
*/

var arrayy = [1, 2, 3, 4]
var razlike = []
var summm = []
for (var i = 0; i <= arrayy.length - 1; i++) {
   for (var j = i + 1; j <= arrayy.length - 1; j++) {
      if (arrayy[j] > arrayy[i]) {
         var pom = arrayy[i];
         arrayy[i] = arrayy[j];
         arrayy[j] = pom;
      }
   }
}
console.log(arrayy)

function sumP(arrayy) {
   var zzbb = 0
   for (var i = 0; i <= arrayy.length - 1; i++) {
      razlike[i] = arrayy[i] - arrayy[i + 1];

   }
   for (var i = 0; i <= razlike.length - 1; i++) {
      zzbb += razlike[i]
   }
   return zzbb;
}

console.log(sumP(arrayy));

/* 4.Zadatak
 Da od datog niza izdvojim (uklonim) svaku drugu rec u nizu*/

var nizz = ["Dzenana", "Mehmedovic", "Dzenana", "Mehmedovic", "Dzenana", "Mehmedovic", "Dzenana", "Mehmedovic"]
var sklonjendrugielement = []

for (i = 0; i <= nizz.length - 1; i + 2) {
   sklonjendrugielement.push(nizz[i])

}
console.log(nizz)
console.log(sklonjendrugielement)




/*5. Zadatak
od datog niza izdvojiti brojeve u formi broja telefona  */

var brojevi = [1, 2, 3, 4, 5, 6, 7, 7, 9, 0, 7]
var zvonizvonii = []

for (i = 0; i <= brojevi.length - 1; i++) {

}



/*6.Zadatak
Sortirati niz po njegovoj duzini */

var reci = ["Teleskop", "Mikroskop", "Trofej", "Salata"]
var sortiranniz = []

for (var i = 0; i <= reci.length - 1; i++) {
   for (var j = 0; j <= reci.length - 1; j++) {
      if (reci.length[j] > reci.length[i]) {
         var pom = reci.length[i];
         reci.length[i] = reci.length[j];
         reci.length[j] = pom;

         sortiranniz.push(pom)
      }
   }
}
console.log(reci);
console.log(sortiranniz)


/*7.zadatak
Da od odredjenog niza izdvojimo dva najveca broja
 
*/

var godine = [3, 5, 8, 9]
var stariji = []

for (i = 0; i <= godine.length-1; i++) {
   for (j = 0; j <= godine.length-1; j++) {
      if (godine[i] > godine[j]) {

         var somm = godine[i];
         godine[i] = godine[j];
         godine[j] = somm

         stariji.push(somm)
      }

   }


}
console.log(stariji)
console.log(godine)
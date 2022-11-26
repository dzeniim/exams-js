/*var arr=[1,2,3,4,5,6];
var numberOfPairs = 0;
var k=5;
var n=arr.length
var pairs=[];



for (var i=0; i<=n-1;i++){
for (var j=0;j<=n-1;j++ )
 
if( (arr[i] + arr[j]) % k === 0)
{ 
  if( i<j ) {
    pairs.push(arr[i],arr[j]);
    
     
   
  }
  
  numberOfPairs++;
}


}
console.log("Ovo je dati niz "+"("+arr+")")

console.log(pairs);


/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 

  function divisibleSumPairs( n, k,  arr) {
  var thesee = 0;
   
      for (var i = 0; i < n; i++) {
          for (var j = i + 1; j < n; j++) {
   
              
              if ((ar[i] + ar[j]) % k == 0)
   
                  
                  thesee++;
          }
      }
   
      return thesee;
  }
  



  function divisibleSumPairs(  k,  ar) {
    var numberOfPairs = 0;
     
        for (var i = 0; i <= arr.length-1; i++) {
            for (var j = 0; j <= arr.length-1; j++) {
              for (var m=0; m<=arr.length-1; m++){
               if ((arr[i] + arr[j]+arr[m]) % k === 0){
                   if (i<j && j<m){ 
                      numberOfPairs++;
                      }
               }
            }
            }
        }
                  
      return numberOfPairs;
   }
  var result= divisibleSumPairs(5,[1,2,3,4,5,6]) 
console.log(result)
 
/*

1. KORAK
  nazivamo funkciju
  function divisibleSumPairs


 2.KORAK 
pisemo argumente u zagradama
function divisibleSumPairs( k, ar)

3.KORAK
inicijaliziramo brojac i dodeljujemo vrednost 0
var numberOfPairs=0

4.KORAK
otvaramo for loop

for(){}

5.KORAK
definisemo da nam prvi index krece od 1 elementa do poslednjeg i kada proveri sve do poslednjeg prelazi na sledeci element

i=0 i<=2 ==>>>> i++

6.KORAK
otvaramo for loop u for loop i inicijaliziramo j proveravamo isto kao i

7.KORAK
postavljamo uslov da nam je zbir elemenata deljiv sa k
if ((arr[i] + arr[j]) % k === 0) 

8.KORAK
postavljamo jos jedan uslov da nam prvi broj bude manji od drugog
 if (i<j)
 ako je uslov ispunjen onda numberOfPair++

9.KORAK
return za vracanje brojaca
 return numberOfPairs;

 For loop smo postavili da bismo proveravali da nam je i ostao 0 tjst na 1 elementok dok nije proverio sve elemente do kraja
 pa kad ih prodje sve otvaramo novi for loop unutar naseg prvobitnog for loopa pa definisemo j da nam ide od 1 elementa takodje,
 na kraju kada nam proveri da li idu od prvog do poslednjeg postavljamo uslov ds nam i bude manji od j i da zbir i+j bude deljiv sa k kojem smo dali vrednost.





*/



































////////////////////////////////2 zadatak qq coveceee 

/* 15 linija koda za drugi zadatak
if j<=1  od i j=i+1
sortiranje niza ce ti trebat  za biranje najveceg
da li je duzina podniza veca od najveceg podniza
*/






/*

function checkElementInSubArr(subArr,num){
  var isElementOk = true;
  
  for (var i = 0; i < a.length; i++) {
     if (Math.abs(subArr[i]-num >1)){
     isElementOk = false
    
      }
     }
     return isElementOk;
        }



function pickingNumbers(a) {
    var lengthOfLongestSubarray = 0;

    for(var i=0; i<=a.length-1;i++){
      subArr=[]
      subArr.push(a[i]);
      for(var j=i+1;j<=a.length-1;j++){
        if{

        var isNumOk = checkElementInSubArr(subArr,a[j])}
      }
      if (subArr.length>lengthOfLongestSubarray){
        lengthOfLongestSubarray=subArr.length;
      }
      else{

      }
    }
  	
    return lengthOfLongestSubarray;
}
console.log(a)


function longest(arr,max){
 var max;

for (i=0;i<=arr.length-1;i++)
if (arr.length>max){
        max=arr.length;

)



}


*/


var a = [1, 2, 4,5,66,67,67]
/*var a = [0, 2, 2, 0, 1, 0, 0, 0, 0]*/

function pickingNumbers(a) {
  var niz = Array(a.length).fill(0), lengthOfLongestSubarray = 0;

  for (var i = 0; i <= a.length -1; i++) {
    niz[a[i]]++;
    console.log(niz)
  }

  for (var i = 0; i <= a.length - 1; i++) {
    if (niz[i] + niz[i + 1] > lengthOfLongestSubarray) {
      lengthOfLongestSubarray = niz[i] + niz[i + 1];
    }

  }

  return lengthOfLongestSubarray;
}
console.log(a)
var result = pickingNumbers(a)
console.log("Broj elemenata najduzeg podniza je " + result)


/* 
1. Deklarisanje funkcije
ARRAY.FILL je metoda koju koristimo da bismo dodelili vrednost kojom smo popunili niz tako da ce svaki element imati istu vrednost,to je mutirajuca metoda koja nam omogucava da menjamo vrednosti ,pored toga ovom metodom dajemo vrednost praznim nizovima.
Deklarisemo varijablu maxlength i dajemo joj vrednost 0
 deklarisemo varijablu arr i dodajemo vrednost nekog niza koji uzima broj elemenata naseg niza pa zatim dodajemo metodu array.fill
  
  2. U funkciji se desava sledece:
  
  - Pokrecemo for petlju (loop) sa sledecim argumentima:
      var i=0 - deklarisemo brojac kao varijablu i dajemo mu pocetnu vrednost 0
        i <= ar.length - 1, u ovom slucaju 0 <= 2 i uslov je zadovoljen pa se izvrsava ono sto je unutar viticastih zagrada for loop-a
    - Pokrece se jos jedan for loop u kome deklarisemo brojac i sa pocetnom vrednoscu i=0 i sa uslovom i<=ar.length-1, 
    
       
    - Nakon sto se sve desilo unutar for loopa sa brojacem i, kad je i=0, desava se i++ odnosno i=i+1 odnosno povecava se vrednost 
    varijable  za 1, pa i ima vrednost 1 odnosno i=1;
    postavljamo uslove da ako je zbir veci od maxlength ona je maxlength zapravo nas zbir pa onda vracamo vrednost maxlength-a
    
    
    return maxlength ==> maxlength 5 u ovom slucaju






    */

// ["3:2", "1:0"]


function getPoints(results) {
  var points = 0;

  for (var i = 0; i <= results.length - 1; i++) {
    var matchresults = results[i] // "3:2"
    var allresults = matchresults.split(":") // ["3", "2"] 
    var x = Number(allresults[0])
    var y = Number(allresults[1])
  }
  if (x > y) {
    points = points + 3
  }
  if (x === y) {
points=points+1
  }
  if (x<y){
    points=0
  }



  return points;
}
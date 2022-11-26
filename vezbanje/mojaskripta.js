/* Napraviti niz koji vraca suprotne brojeve npr ako imam pozitivan da bude negativan i obrnuto*/

var arr=[1,2,-4,-6,-14,5,8,9];
var newarr=[];



for (var i=0; i<=arr.length-1; i++){
var izabraniBroj= arr[i]
  if (izabraniBroj >= 0 )
{
newarr.push(izabraniBroj * -1)

}
if (izabraniBroj < 0 )
{
newarr.push(Math.abs(izabraniBroj))

}


}

console.log(arr)
console.log(newarr)
var arr=[1,2,3,4,5,6];
var numberOfPairs = 0;
var k=5;
var n=arr.length
var pairs=[];



for (var i=0; i<=n-1;i++){
for (var j=0;j<=n-1;j++ )
 
if(i<j && (arr[i] + arr[j]) % k === 0)
{ 
  if( !pairs.includes(arr [i]) &&  !pairs.includes (arr[j])   ) {
    pairs.push(arr[i],arr[j]);
    
    
    numberOfPairs++;
  }
  

}


}
console.log("Ovo je dati niz "+"("+arr+")")

console.log(pairs);




  






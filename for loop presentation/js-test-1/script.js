var arr=[1,2,3,4,5,6];
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
 

 int divisibleSumPairs(int n, int k, vector<int> ar) {
  int thesee = 0;
   
      for (int i = 0; i < n; i++) {
          for (int j = i + 1; j < n; j++) {
   
              
              if ((ar[i] + ar[j]) % k == 0)
   
                  
                  thesee++;
          }
      }
   
      return thesee;
  }
  */
  


////////////////////////////////2 zadatak qq coveceee 

/*
var a =[1,1,2,2,3,4,4,5,6,6]
var newar=[]
var longest=[]
var k=1

for (s = 0; s <= a.length - 2; s++) 
  for (var e = s + 1; e <= a.length - 1; e++) 
   

*/
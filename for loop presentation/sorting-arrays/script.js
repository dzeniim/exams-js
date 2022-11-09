var num = [2,2,2,5,4,6,7,3,8,8,8,8,4,4,4,4,43,3,3,3,3,333,1,1,1,8,99,9,9];
var rezultat = [];

for (i = 0; i <= num.length - 1; i++) {
  var izabraniBroj = num[i];
  if (!rezultat.includes(izabraniBroj)) {
    rezultat.push(izabraniBroj)
  }
}
for (i = 0; i <= rezultat.length - 2; i++) {
  for (var j = i + 1; j <= rezultat.length - 1; j++) {
    if (rezultat[j] > rezultat[i]) {
      var pom = rezultat[i];
      rezultat[i] = rezultat[j]
      rezultat[j] = pom;
    }
    
  }
 
}

console.log(rezultat)
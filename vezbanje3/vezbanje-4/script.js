var niz=[1,3,5,6,3,0,1,3];

var minimum=niz[0]
var minIndex=0
niz.forEach(function(item,index){
    if(item < minimum){
        minimum=item;
        minIndex=index;
    }
}
)

if (toReturn === "index") {
    return minIndex;
} else if (toReturn === "value") {
    return minimum;
}



var arr = ["Haris", "Davud", "Aladin"];
// for (var i = 0; i <= arr.length - 1; i++) {
//   arr[i] = arr[i] * 2;
// }
arr = arr.map(function (item, index) {
  return (index + 1) + ' - ' + item;
})

arr = arr.map(function(item, index){
  var splittedItem = item.split(' - ');
  var name = splittedItem[1];
  return name;
})
    


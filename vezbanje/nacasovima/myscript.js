

var godine = [3, 5, 8, 9]
var stariji = []

for (i = 0; i <= godine.length - 1; i++) {
    for (j = 0; j <= godine.length - 1; j++) {
        if (godine[i] > godine[j]) {

            var somm = godine[i];
            godine[i] = godine[j];
            godine[j] = somm

            stariji.push(somm)
        }

    }


}
console.log(godine)
console.log(stariji)
console.log(godine[0] + " Prva starija cifra")
console.log(godine[1] + " Druga starija cifra")




/*2.zadatak

Da od datog niza izdvojim odgovore i dam im ocene
 */

var tacniodgovori = ["a", "a", "b", "b"]
var answerofstudent = ["a", "c", "b", "d"]
var points = 0;

function checkExams(corect, student) {
    var points = 0
    for (var i = 0; i <= corect.length - 1, i++;) {
        if (student[i] === "") {
            continue
        }

        if (corect[i] === student[i]) {
            points = points + 4
        }
        else {
            points = points + 1
        }
        if (points < 0) {
            return 0
        }

        return points
    }
}

/*3.zadatak 
Naci najmanju vrednost niza i vratitit njegov index

*/
function min(arr, toReturn) {
    var minimum = arr[0];
    var minIndex = 0;
    for (var i = 1; i <= arr.length - 1; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
            minIndex = i;
        }
    }
    if (toReturn === "index") {
        return minIndex;
    } else if (toReturn === "value") {
        return minimum;
    }
}









/*4.zadatak
 Naci najmanji i vratiti funkciju
*/

function checking(a, limit) {
    var result = true
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] >= limit) {
            result = false
        }

    }

    return result
}



/* 5.zadatak

Izdvojiti indexe od velikih slova
 */


var capitals = function (word) {
    var letters = word.split('');
    // "book".split('') ===> ["b", "o", "o", "k"]
    var indexesOfUpperCase = [];
    for (var i = 0; i <= letters.length - 1; i++) {
        if (letters[i] === letters[i].toUpperCase()) {
            indexesOfUpperCase.push(i);
        }
    }
    return indexesOfUpperCase;
};





/*6.zadatak
Proveriti jel sortiran niz i kako je sortiran
*/

function isSortedAndHow(array) {
    // "ascending" - rastuce, "descending" - opadajuce, "no" - nije sortiran
    // [1,3,6,9,6,11,16]
    var typeOfSort;
    if (array[0] < array[1]) {
        typeOfSort = "yes, ascending";
    } else if (array[0] > array[1]) {
        typeOfSort = "yes, descending";
    } else {
        typeOfSort = "no"
        return typeOfSort;
    }
    for (var i = 1; i <= array.length - 1; i++) {
        if (typeOfSort === "yes, ascending" && array[i - 1] > array[i]) {
            typeOfSort = "no";
            break;
        }
        if (typeOfSort === "yes, descending" && array[i - 1] < array[i]) {
            typeOfSort = "no";
            break;
        }
    }
    return typeOfSort;

}


/*10.Zadatak
Da dati niz vratim u formi broja telefona */

var n = [6,5,4,7,8,9,3,3,2]


console.log("( "+ n[0] + n[1] + n[2] + ' - '+ n[3] + n[4] + n[5] + '-' + n[6] + n[7] + n[8] + "-"+ n[9]+ " )")

/*11.Zadatak */
var stupid=[1,6,7,7,6,8,9,9,0,7]

for(i=0;i<=stupid.length-1;i++){
    console.log(stupid.length)
}
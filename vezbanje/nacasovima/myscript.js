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
console.log(godine[0])
console.log(godine[1])




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
Proveriti da li je niz sortiran i kako je sortiran

*/
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
    return typeOfSort;
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

var reci = ["Teleskop", "Mikroskop", "Trofej", "Salata"]
var sortiranniz = []

for (var i = 0; i <= reci.length - 1; i++) {
    for (var j = 0; j <= reci.length - 1; j++) {
        if (reci.length[j] > reci.length[i]) {
            var pom = reci.length[i];
            reci.length[i] = reci.length[j];
            reci.length[j] = pom;

            sortiranniz.push(pom)
            sortiranniz.split
        }
    }
}
console.log(reci);
console.log(sortiranniz)



/*var ucenik={
    Name:"Dzenana",
    Surname:"Mehmedovic",
    YearOfBirth:2005,
    ocene:[
        {predmet:"Zdravstvena Nega", ocena:5 },
        {predmet:"Infektologija", ocena:5 },
        {predmet:"Ginekologija", ocena:5 },
        {predmet:"Sociologija", ocena:5 },

    ]

}

var stamojobjektsadrzi= Object.getOwnPropertyNames(ucenik)
ucenik.ocene.push({predmet:"Patologija", ocena:4});

console.log(ucenik.ocene[3].predmet)// ovako pristupam indexu mog niza unutar objekta i njegovom propertiju
console.log(ucenik["ocene"])// ali  mogu da pristupim i ovako u tekstualnom obliku :o
console.log(ucenik)
console.log(stamojobjektsadrzi)
*/


var grades=[]

function getGrade(){

    
var gradeNum = +document.getElementById("num").value
var gradeSubject = +document.getElementById("subjectName").value

var grade = { num: gradeNum, subject: gradeSubject };
document.getElementById("num").value = "";
document.getElementById("num").value = ""; 
document.getElementById("subjectName").value = "";
return grade;

}

function addGradeToArray(grades){
grades.push(grades);
for(var i=0; i<=grades.length-1; i++){
    for(var j=i+1; j<=grades.length-1; j++){
      if(grades[j].num > grades[i].num){
        var pom = grades[i];
        grades[i] = grades[j];
        grades[j] = pom;
      }
    }
  }

}

function renderAllGrades(){
document.getElementById("listOfGrades").innerHTML="";
var list=document.getElementById("listOfGrades");

for(var i=0;i<=grades.length-1; i++){

    
}

}


document.getElementById("addButton").addEventListener("click", function() {
    var ocena=getGrade()
    addGradeToArray(ocena)
    sortCurrentArrayOfGrade()
    renderAllGrades()
    var average= calculateAverage()
    showAverage(average)
})
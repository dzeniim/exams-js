var grades = [];




function getGrade() {

    var gradeNum = +document.getElementById("num").value;
    var gradeSubject = document.getElementById("subjectName").value;


    var grade = { num: gradeNum, subject: gradeSubject };

    document.getElementById("num").value = "";
   
    document.getElementById("subjectName").value = "";
    return grade;
}


var mainSubjects=["Matematika","Engleski","Srpski"]

document.getElementById("add2Button").addEventListener("click",function (){


    var filteredGrades =grades.filter(function (item,index){
    return mainSubjects.includes(item.subjects)
    
})
console.log(filteredGrades)
})

function calcuateSumOfGrades() {
    var sum = 0;
    for (var i = 0; i <= grades.length - 1; i++) {
        sum = sum + grades[i].num;
    }
    return sum;
}

function addGradeToArray(grade) {
    grades.push(grade);
  }
  function showTheArrayInConsole() {
    console.log(grades);
  }
  function renderAllGrades() {
    document.getElementById("listOfGrades").innerHTML = "";
   
    var list = document.getElementById("listOfGrades");
    for (var i = 0; i <= grades.length - 1; i++) {
      
      var listItem = document.createElement("li");
     
      listItem.textContent = grades[i].num + " - " + grades[i].subject;
     
      list.appendChild(listItem);
    }
  }

function showAverageGrade(average) {
    document.getElementById("average").textContent = average;
}

function sortCurrentArrayOfGrade() {
    for (var i = 0; i <= grades.length - 1; i++) {
        for (var j = i + 1; j <= grades.length - 1; j++) {
            if (grades[j].num > grades[i].num) {
                var pom = grades[i];
                grades[i] = grades[j];
                grades[j] = pom;
            }
        }
    }
}
function calculateAverage() {
    if (grades.length === 0) {
      return;
    }
    var sumOfGrades = calcuateSumOfGrades();
  
    return sumOfGrades / grades.length;
  }


document.getElementById("addButton").addEventListener("click", function () {

    var ocena = getGrade();

    addGradeToArray(ocena);

    sortCurrentArrayOfGrade();

    renderAllGrades();

    var average = calculateAverage();

    showAverageGrade(average);
    showTheArrayInConsole();
});




var numbers=[1,1,1,3,4,4,5,5,6,7,7,8,8,7,8]

numbers.forEach(function(item,index){
    if(item % 2===0){

        return item
    }
    

    })
    console.log(numbers)

    var deljivi= numbers.filter(function(item,index){
        return item % 2 ===0
    }
    )
    console.log(deljivi)
    

     var mapirani=numbers.map(function(item,index){

     return {value:item, index:index}
    })

    console.log(mapirani)


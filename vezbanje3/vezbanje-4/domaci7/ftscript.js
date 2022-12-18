var goals = [];

document.getElementById("addGoal").addEventListener("click", function () {
  
  var min = document.getElementById("min").value;
  var player = document.getElementById("score").value;
  var team = document.getElementById("team").value;

  
  var goal = {
    min: min,
    player: player,
    team: team,
  };

  
  goals.push(goal);

  
  document.getElementById("min").value = "";
  document.getElementById("score").value = "";
  document.getElementById("team").value = "";

  
  var listOfGoalsElement = document.getElementById('listOfGoals');


  listOfGoalsElement.innerHTML = ""

  var moroccoGoals = 0;
  var franceGoals = 0;

  goals.forEach(function(item, index){
    var goalElement = document.createElement('li');
    goalElement.textContent = "Igrac " + item.player + ' dao gol u ' + item.min + " minuti" + " u timu " + item.team;

    if(item.team === 'France'){
        goalElement.style = "text-align: right;"
        franceGoals++;
    } else {
        moroccoGoals++;
    }

    listOfGoalsElement.appendChild(goalElement);
  });


  document.getElementById('moroccoScore').textContent = moroccoGoals;
  document.getElementById('franceScore').textContent = franceGoals;
});
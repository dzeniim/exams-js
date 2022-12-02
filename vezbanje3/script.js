var ucenik={
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
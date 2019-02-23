const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];



//====================== PLUS FACILE ========================================

let bornSeventies = entrepreneurs.filter(a => a.year>= 1970 && a.year <= 1980)
console.log(bornSeventies)

let fusionDeName = entrepreneurs.map(a => a.first + ' ' + a.last)
console.log(fusionDeName);

let ageCal = entrepreneurs.map(a=>  ` ${a.first} ${a.last} is ${ new Date().getFullYear()  - a.year} years old`)
console.log(ageCal);


let trier = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last, 'en', {'sensitivity': 'base'}))
let trier =  entrepreneurs.sort(function(a, b) {  return  a.last.localeCompare(b.last); });
console.log(trier);



//======================= PLUS DIFFICILE ====================================
// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
function borSeventies() {
  seventies = []
  entrepreneurs.forEach(a => {
    if (a.year.toString().includes("197")) {
      seventies.push(a);
    }
  })
  return seventies;
}

console.log(borSeventies());

// Sors une array qui combien le prénom et le nom des entrepreneurs
function combineName(){
  let fullName = []
  entrepreneurs.forEach(a =>{
    fullName.push(a.first + " "+ a.last)
  })
  return fullName
}
console.log(combineName())

// Quel âge aurait chaque inventeur aujourd'hui ?

function ageCount() {
  let age = []
  entrepreneurs.forEach(a =>{
    age.push(2019 - a.year)
  })
  return age
}
console.log(ageCount())

// Trie les inventeurs par ordre alphabétique du nom de famille
function filter(){
  let trier = [] 
  entrepreneurs.forEach(a=>{
    trier.push(a.last)
    trier.sort()
  })
return trier
}
console.log( filter())

var etage = prompt("enter your floor number")

// if(etage != null){
  
// }
var symbole = "#"
for (let i = 1; i <= etage; i++) {
  console.log(" ".repeat(etage-i)  + symbole.repeat(i))
  }




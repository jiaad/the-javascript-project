var chiffre = prompt("entrez votre num")
var total = 1
for (var i = 0; i < chiffre; i++) {
  var total = total * (chiffre - i)
}
alert(chiffre + '!= '+ total);

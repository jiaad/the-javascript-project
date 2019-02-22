const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 5 }
];

function livreRented(){
  let emprunte = []
  books.forEach(a=>{
    if(a.rented >=1 ){
      emprunte.push(a.rented)      
    }
  })
  return emprunte
}
console.log(livreRented())

// Quel est livre le plus emprunté ?

  function bookMostRented(){
    let high = books.slice()
    high.sort((a,b)=> (b.rented - a.rented))
    console.log(`le livre le plus emprunté est le : ${high[0].title} `)
  }
  console.log("===========================");
  
bookMostRented();


// Quel est le livre le moins emprunté ?

function moinsRented(){
  let lowest = books.slice()
  lowest.sort((a,b)=>(a.rented - b.rented))
  console.log(`le livre le moins emprunté est le : ${lowest[0].title}`)
}
moinsRented()
// Trouve le livre avec l'ID: 873495
function findById(){
books.forEach(a=>{
  if(a.id === 873495){
    console.log(a.title)
  }
})

}

findById()
// Supprime le livre avec l'ID: 133712
function deleteById(){
let index = books.findIndex(a=> a.id === 133712)
books.splice(index, 1)
console.log("le livre supprimé")
console.log(books)
}
deleteById()

// Trie les livres par ordre alphabétique
function ordreAlpha(){
  let alpha = []
  books.forEach(a =>{
    alpha.push(a.title)
  })
  return alpha.sort()
}
console.log(ordreAlpha())
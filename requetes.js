const requetes = [
  {
    id : 1,
    description : "Bonjour, j'ai besoin d'aide sur les fonctions.",
    topic : "JavaScript",
    date : "2018-04-20",
  },

  {
    id : 2,
    description : "Bonjour, j'ai besoin d'aide sur la créations de bases de données.",
    topic : "MySQL",
    date : "2018-04-24",
  }
]

// const requetesHtml = []
//
// const names = ["James", "Robert", "Julia"]
//   function getItemName(name) {
//     return `<li>${name}</li>`
//   }
//
//   console.log(names.map(getItemName).join(""))




  function getRequestItem(requete) {
    return `<li>${requete.description}</li>`
  }

  console.log(requetes.map(getRequestItem).join(""))

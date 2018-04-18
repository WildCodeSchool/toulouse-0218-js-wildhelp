'use strict'
const targetElement = document.getElementById('main')


const getTitle = (titre) =>
`
    <h1>${titre}</h1>
`

const getForm = (title, type) => /* @html */ `
  <h1>${title}</h1>
  <form>
    <input type="email" name="email" />
    <input type="password" name="password" />
    <input type="hidden" name="account-type" value="${type}" />
  </form>
`
const getNavbar = () => /* @html */ `
  <ul id="navbar">
    <li><a href="/inscription-wilder"> Inscription Wilder</a></li>
    <li><a href="/inscription-helper"> Inscription Helper</a></li>
    <li><a href="/dfrgg"> Bug</a></li>
  </ul>
`

function getForm2 (title, type) {
  return /* @html */ `
    <h1>${title}</h1>
    <form>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <input type="hidden" name="account-type" value="${type}" />
    </form>
  `
}

// const inscriptionwilderhtml = () => getForm
// targetElement.innerHTML = inscriptionwilderhtml



const notFoundHtml = `<h1>404 Page non trouvée</h1>
    <p><a href="/">Retour à l'accueil</a></p>`

const render = htmlContent => {
  const navbarContent = getNavbar()
  targetElement.innerHTML = navbarContent + htmlContent
}



const inscriptionhelperhtml = () => {
  // affichage du formulaire
  render()
  // let myForm = document.getElementById('myForm')

  // myForm.addEventListener('submit', function(e) {
  //     e.preventDefault();

  // });



  // gestion des evenements
  // const navbar = document.getElementById('navbar')
  // const links = navbar.getElementsByTagName('a')
  // for (let link of links) {
  //   link.addEventListener('click', function(event) {
  //     event.preventDefault()
  //     const linkUrl = event.target.href
  //     if(linkUrl === 'http://localhost:4000/inscription-wilder') {
  //       showRegisterWilder()
  //     }
  //     else if(linkUrl === 'http://localhost:4000/inscription-helper') {
  //       showRegisterHelper()
  //     }
  //   })
  // }
}

const showRegisterWilder = () => {
  render(getForm('Inscription Wilder', 'wilder'))
}

const notFound = () => {
  render(notFoundHtml)
}


 //
 page('/', showRegisterWilder)
 page('/inscription-wilder', showRegisterWilder)
 page('/inscription-helper', showRegisterHelper)
 page('*', notFound)
 page()

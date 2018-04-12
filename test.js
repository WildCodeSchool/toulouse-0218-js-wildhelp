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

const inscriptionhelperhtml = () =>
`<div class="button"><a href="connexion.html" class="btn btn-default btn-lg active" role="button" title="Connexion">Déjà inscrit ?</a></div>
<div class="container">
   <div class="row">
      <div class="container">
         <form id="myForm" class="form-horizontal" method="POST" action="/register">
            <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
                  <h1>Helper Inscription</h1>
                  <hr>
               </div>
            </div>
            <div class="row">
               <div class="col-md-3 field-label-responsive">
                  <label for="name">Nom Prénom</label>
               </div>
               <div class="col-md-6">
                  <div class="form-group">
                     <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Wilder Doe" required>
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="form-control-feedback">
                     <span class="text-danger align-middle">
                        <!-- Put name validation error messages here -->
                     </span>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-3 field-label-responsive">
                  <label for="email">E-mail</label>
               </div>
               <div class="col-md-6">
                  <div class="form-group">
                     <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                        <input type="text" name="email" class="form-control" id="email" placeholder="wilder@example.com" required>
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="form-control-feedback">
                     <span class="text-danger align-middle">
                        <!-- Put e-mail validation error messages here -->
                     </span>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-3 field-label-responsive">
                  <label for="password">Mot de passe</label>
               </div>
               <div class="col-md-6">
                  <div class="form-group has-danger">
                     <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                        <input type="password" name="password" class="form-control" id="password" placeholder="Mot-de-passe" required>
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="form-control-feedback">
                     <span class="text-danger align-middle">
                     <i class="fa fa-close">Champ obligatoire !</i>
                     </span>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-3 field-label-responsive">
                  <label for="password">J'ai appris à la W.C.S</label>
               </div>
               <div class="col-md-6">
                  <div class="form-group">
                     <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon" style="width: 2.6rem">
                           <i class="fa fa-repeat"></i>
                        </div>
                        <select id="subject" name="subject" class="form-control" required="required">
                           <option value="" selected="">Selectionnez</option>
                           <option>JavaScript Angular</option>
                           <option>JavaScript React</option>
                           <option>JavaScript Vue.js</option>
                           <option>JAVA J2EE</option>
                           <option>JAVA Android</option>
                           <option>PHP</option>
                           <option>Symfony</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  S'inscrire
                  </button>
               </div>
            </div>
         </form>
      </div>
   </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-body">
            Bienvenue à toi Helper ! Clique ici pour accéder dans la communauté.
         </div>
         <div class="modal-footer">
            <button type="button" id="buttonWelcome" class="btn btn-primary"
               onclick="javascript:window.location='languages.html'; return false;">Welcome !</button>
         </div>
      </div>
   </div>
</div>
<footer>
<div class="reseaux col-mg-6">
   <p> Embarquez avec nous : </p>
   <a href="https://www.facebook.com/" target="_blank"><img class="imgbtn" src="logofooter/fb.png" alt="imgbtn"></a>
   <a href="https://www.instagram.com/" target="_blank"><img class="imgbtn" src="logofooter/insta.png" alt="imgbtn"></a>
   <a href="https://twitter.com/" target="_blank"><img class="imgbtn" src="logofooter/twitter.png" alt="imgbtn"></a>
   <a href="https://www.twitch.tv/khanaeleff" target="_blank"><img class="imgbtn" src="logofooter/twitch.png" alt="imgbtn"></a>
   <a href="https://slack.com/intl/fr-fr/brand-guidelines" target="_blank"><img class="imgbtn" src="logofooter/slack.png" alt="imgbtn"></a>
</div>
<div class="row no-gutters">
   <div class="col-12">
      <p class="madeBy">
         Made by The Wild Help Team 2018 session
      </p>
   </div>
</div>`

const footerForAllPage =  `<footer>
        <div class="reseaux col-mg-6">
            <p> Embarquez avec nous : </p>
            <a href="https://www.facebook.com/" target="_blank"><img class="imgbtn" src="logofooter/fb.png" alt="imgbtn"></a>
            <a href="https://www.instagram.com/" target="_blank"><img class="imgbtn" src="logofooter/insta.png" alt="imgbtn"></a>
            <a href="https://twitter.com/" target="_blank"><img class="imgbtn" src="logofooter/twitter.png" alt="imgbtn"></a>
            <a href="https://www.twitch.tv/khanaeleff" target="_blank"><img class="imgbtn" src="logofooter/twitch.png" alt="imgbtn"></a>
            <a href="https://slack.com/intl/fr-fr/brand-guidelines" target="_blank"><img class="imgbtn" src="logofooter/slack.png" alt="imgbtn"></a>
        </div>
        <div class="row no-gutters">
            <div class="col-12">
                <p class="madeBy">
                    Made by The Wild Help Team 2018 session
                </p>
            </div>
        </div>
  </footer>`

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

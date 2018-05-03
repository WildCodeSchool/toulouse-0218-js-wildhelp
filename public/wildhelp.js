  'use strict'
const targetElement = document.getElementById('main')


const accueilhtml =
/* @html */`<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4  bg-white border-bottom box-shadow" id="navBarAcc">
   <h4 class="my-0 mr-md-auto">Wild Help</h4>
   <nav class="my-2 my-md-0 mr-md-3">
      <a href='/helper' data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom"  data-content="Inscris toi pour aider les nouveaux élèves !">Alumni</a>
   </nav>
   <a class="btn" href="/connexion">Connexion</a>
</div>
    <div class="row background">
  <img class ="container-fluid" src="/image/gif1.gif" type="image/gif" height="150%" loop="0" />
   <div class="accInscription">
      <p>Profite de la communauté des développeurs Alumni de la Wild pour t'aider à résoudre les casse-têtes les plus fous durant ta formation !</p>
  </div>
  <div class="btnWild">
      <a href="/wilder"><button type="button" class="btn">Inscription</button></a>
  </div>
</div>`


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

const inscriptionHtml = (title, text, type) =>
/* @html */ `

  <section class="FormulaireInsc">
  <form method="POST" id="myFormulaireInscription" class="form-horizontal"  action="/register" >
      <input type="hidden" name="accountType" value="${type}" />
      <div class="container">
         <div class="card">
            <div class="card-body">
               <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6"> <h1>${title}</h1></div>
                    <div class="col-md-12 text-center">
                       <p>${text}</p>
                    </div>
                  <div class="col-md-6">
                     <label for="name">Prénom</label>
                     <div class="form-group">
                        <div class="input-group-addon" style="width: 2.6rem"></div>
                        <input type="text" name="name" autocomplete="given-name" class="form-control" id="given" placeholder="John" required="required"/>
                     </div>
                     <label for="surname">Nom</label>
                     <div class="form-group">
                        <div class="input-group-addon" style="width: 2.6rem"></div>
                        <input type="text" name="surname" autocomplete="family-name" class="form-control" id="family" placeholder="Doe" required="required"/>
                     </div>
                     <label for="email">E-mail</label>
                     <div class="form-group">
                        <div class="input-group-addon" style="width: 2.6rem"></div>
                        <input type="text" name="email" autocomplete="email" class="form-control" id="email" placeholder="wilder@example.com" required="required"/>
                     </div>
                     <label for="password">Mot de passe</label>
                     <div class="form-group">
                        <div class="input-group-addon" style="width: 2.6rem"></div>
                        <input type="password" name="password" autocomplete="current-password" class="form-control" id="current" placeholder="Mot-de-passe" required="required"/>
                     </div>

                     <input type="submit" value="S'inscrire" id="sinscrire" />
                     <a href="/connexion">
                        <button type="submit" value="submit" class="btn btn-primary ml-5" a href="/connexion">
                     Déjà inscrit ?
                     </button>
                    </a>
                  </div>
                  <div class="container col-md-6">
                     <div class="ImgInscription">
                        <img class="img-fluid" src="/image/formInsc.jpg" id="imageInscription"  alt="ImgInscription">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </form>
 </section>`

const connexionHtml = /* @html */ `
  <section class="login-block">
   <div class="container" id="loginco">
      <div class="row">
         <div class="col-md-4 login-sec">
            <h2 class="text-center">Connexion</h2>
            <form method="POST" id="loginForm" class="form-horizontal"  action="/login">
               <div class="form-group">
                  <label for="email" class="text-uppercase">E-mail</label>
                  <input type="text" name="email" autocomplete="email" class="form-control" id="email" placeholder="wilder@example.com" required />
               </div>
               <div class="form-group">
                  <label for="password" class="text-uppercase">Mot de Passe</label>
                  <input type="password" autocomplete="current-password" name="password" class="form-control" id="password" placeholder="Mot-de-passe" required />
               </div>
               <div class="form-check">
                  <label class="form-check-label">
                  <input type="checkbox" class="form-check-input">
                  <small>Se souvenir de moi</small>
                  </label>
                  <input type="submit" class="btn-login" value="Connexion" />
               </div>
            </form>
            <div id="result"></div>
         </div>
         <div class="col-md-8 banner-sec">
            <div id="carousel" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img class="d-block img-fluid" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c91c8e3f63462e0739c676dfe8fee8&auto=format&fit=crop&w=1050&q=80" alt="Second slide">

                  </div>

                  <div class="carousel-item">
                    <img class="d-block img-fluid" src="https://images.unsplash.com/photo-1497171156029-51dfc973e5f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8e7ca2e7514a9e0e66fcc2091dc2ad5&auto=format&fit=crop&w=1050&q=80" alt="First slide">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
 </section>`



function getRequestItem(requete) {

  return `<li class="list-group-item list-group-item-warning justify-content-between">${requete.description}</li>`
}

const listerequeteHtml = (requetes) => /* @html */ `
<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4  bg-white border-bottom box-shadow" id="navBarAide">
  <h5 class="my-0 mr-md-auto">WildHelp</h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <a class="p-2 text-dark" href="/">
      <h5 class="my-0 mr-md-auto font-weight-normal">Accueil</h5>
    </a>
  </nav>
  <a class="btn btn-log-out" href="/logout"><span class="glyphicon glyphicon-log-out">Deconnexion </span> </a>
</div>

<<<<<<< HEAD
<div class="container">
=======


<!-- Ajout icônes technologies proposées. -->

<div class="technologies container">
>>>>>>> e3710c7f11feee9bc3ac21bcd2d4b81948a9e963
  <h3>Technologies proposées</h3>
  <div class="row justify-content-center">
    <div class="col-4">
      <div class="row">
        <div class="col-md-4 col-sm logo">
          <a href="/requete" target="_blank">
            <img class="img-fluid" src="http://blog.zenika.com/wp-content/uploads/2016/04/java-logo.png" alt="Java Logo" />
            <p>Java</p>
          </a>
        </div>

          <div class="col-md-4 col-sm logo">
            <a href="/requete" target="_blank">
              <img class="img-fluid" src="http://edmundtian.com/images/nodejs.ico" alt="JavaScript Logo" />
              <p>JavaScript</p>
            </a>
          </div>

            <div class="col-md-4 col-sm logo">
              <a href="/requete" target="_blank">
                <img class="img-fluid" src="http://muchocodigo.com/wp-content/uploads/2013/11/php.jpg" alt="Php Logo" />
                <p>PHP</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="container">
   <div class="row">
      <div class="col-md-12">
         <h3>Liste des requêtes</h3>
         <h6>Cliquez sur une requête pour la dérouler</h6>
         <div id="accordion">
            ${requetes.map(getRequestItem).join("")}
         </div>
      </div>
   </div>
</div>`

function getRequestItem(requete) {

  return /* @html */ `
   <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#${requete.id}" aria-expanded="true" aria-controls="collapseOne">
          ${requete.topic}
        </button>
      </h5>
    </div>

    <div id="${requete.id}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
          <p>Requête de: ${requete.name} ${requete.surname}</p><br>
          ${requete.description}<br>

          <!-- <p>Comment me contacter ?</p>
          <form class="choix-contact">

            <input type="radio" name="contact" value="email" checked />par e-mail<br>
            <input type="radio" name="contact" value="slack" />sur Slack


            <input type="text" name="pseudoSlack" value="" style="display:none" /><br>

          </form> -->
          <button type="submit" class="jelaide btn">Je l'aide</button>
      </div>
    </div>
  </div>`
}

const showListeRequete = () => {

  fetch('/liste-requete', {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accpet: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(requetes => {
    render(listerequeteHtml(requetes))
    const formulaires = document.getElementsByClassName('choix-contact')
    for (const formulaire of formulaires) {
      const inputs = formulaire.getElementsByTagName('input')
      const inputPseudoSlack = inputs[2]
      for (let i = 0; i <= 1; i++ ) {
        const bouton = inputs[i]
        bouton.addEventListener("click", function () {
          console.dir(bouton)

          if (bouton.value == "slack") {
          inputPseudoSlack.style.display="inline"
          }
          else {
            inputPseudoSlack.style.display="none"
          }
        })
      }
    }
  })
}


// PAGE DEMANDE AIDE


const aideHtml = /* @html */ `
<<<<<<< HEAD
   <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4  bg-white border-bottom box-shadow" id="navBarAide">
      <h5 class="my-0 mr-md-auto">WildHelp</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/">
           <h5 class="my-0 mr-md-auto font-weight-normal">Accueil</h5>
        </a>
        <p> Hello ${loggedInUser}</p>
      </nav>
       <a class="btn btn-log-out" href="/logout"><span class="glyphicon glyphicon-log-out">Deconnexion </span> </a>
   </div>
   <div class="container">
     <form id="formHelp" class="form-horizontal" method="POST" action="/aide">
       <div class="bodyHelp">
         <div class="row">
           <div class="col-md-12">
             <h2>Demande d'aide</h2>
           </div>
         </div>
         <div class="row">
           <div class="col-md-9 offset-md-3">
             <div class="input-group">
               <select id="subject" name="langage" class="form-control" required="required">
                 <option value="" selected="">Selectionnez le langage</option>
                 <option value="1">JavaScript</option>
                 <option value="2">JAVA</option>
                 <option value="3">PHP</option>
               </select>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-md-12">
             <p>
               <label for="topic">Sujet requête :</label>
               <input type="text" class="form-control" name="topic" id="topic" placeholder="Ex : React, Symfony ..." size="40" maxlength="50" required="required" />
             </p>
           </div>
         </div>
         <div class="row">
           <div class="col-md-12">
             <p>
               <textarea name="description" id="description" class="form-control" rows="10" cols="50" required="required"
        placeholder="Décris ici, en détail, ton problème."></textarea>
            </p>
          </div>
      </div>
      <div class="row buttonHelp">
        <div class="col-md-6">
          <a href="/"><button type="reset" class="btn btn-outline-danger">Annuler</button></a>
        </div>
        <div class="col-md-6">
          <input class="btn btn-outline" type="submit" value="Aidez-moi !"/>
        </div>
      </div>
    </div>
  </form>
</div>`

const footerForAllPage = /* @html */ `
  <footer>
   <div class="reseaux col-md-12">
    <a href="https://www.facebook.com/wildcodeschool/" target="_blank"><img class="imgbtn" src="logofooter/fb.png" alt="imgbtn"></a>
    <a href="https://www.instagram.com/wildcodeschool/" target="_blank"><img class="imgbtn" src="logofooter/insta.png" alt="imgbtn"></a>
    <a href="https://twitter.com/wildcodeschool" target="_blank"><img class="imgbtn" src="logofooter/twitter.png" alt="imgbtn"></a>
    <a href="https://www.twitch.tv/khanaeleff" target="_blank"><img class="imgbtn" src="logofooter/twitch.png" alt="imgbtn"></a>
    <a href="https://wild4ever.slack.com/" target="_blank"><img class="imgbtn slack" src="logofooter/slack.png" alt="imgbtn"></a>
   </div>
   <div class="made col-md-12">
     <p>Made by <a href="https://www.linkedin.com/in/leila-dqiqi-b55518160/" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="LinkedIn de Leïla !">Leïla</a>,
       <a href="https://www.linkedin.com/in/florentin-hauton-479a64156/" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="LinkedIn de Florentin !">Florentin</a>,
       <a href="https://www.linkedin.com/in/thientamtran/" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="LinkedIn de Thien Tam !">Thien Tam</a>,
       <a href="https://www.linkedin.com/in/nicolas-nivlet-b3aab6a3/" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="LinkedIn de Jack !">Jack
       </a> _ WildCodeSchool Toulouse 2018.</p>
   </div>
 </footer>`


// DEBUT PAGE HELP
const showAide = () => {
    render(aideHtml)
// Envois du formulaire vers la database
    const formCours = document.getElementById('formHelp')
    formCours.addEventListener('submit', event => {

      let data = {}

      event.preventDefault()
      const formControls = formCours.getElementsByClassName('form-control')
      for(let formControl of formControls) {
      if(formControl.name !== '') {
        data[formControl.name] = formControl.value
        }
      }

      const body = JSON.stringify(data)
      console.log(body)

      fetch('/aide', {
        method: 'POST',
        body: body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
// alerte de validation du formulaire
        if (data.success) {
          alert(data.success)
        }
// permet de revenir sur un formulaire vierge
      // loggedInUser = data
        showAide()
        console.log(data)
      })
    })
  }
// FIN PAGE HELP


  const render = htmlContent => {
    targetElement.innerHTML =  htmlContent + footerForAllPage
  }

  const showInscriptionWilder = () => {
    render(inscriptionHtml('Inscription Wilder', 'Un alumni de la Wild Code School peut t\'aider, même au bout de la France ou du monde !', 'Wilder'))
    const element = document.getElementById('sinscrire')
    const myForml = document.getElementById('myFormulaireInscription')
    myForml.addEventListener('submit', e => {
      let data= {}
      e.preventDefault()
      const inputs = myForml.getElementsByTagName('input')
      for(let input of inputs) {
        if(input.name !== '') {
          data[input.name] = input.value
        }
      }
      const body = JSON.stringify(data)
      fetch('/register', {
        method: 'POST',
        body: body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert (data.error)
          return
        }
        loggedInUser = data
        console.log(data)
          page ('/aide')
      })
    })
    }

   const showInscriptionHelper = () => {
     render(inscriptionHtml('Inscription Alumni', 'Un élève de la Wild Code School est en détresse. Seras-tu l\'aider ?', 'Helper'))

     const element = document.getElementById('sinscrire')
     const myForml = document.getElementById('myFormulaireInscription')
     myForml.addEventListener('submit', e => {
       let data= {}
       e.preventDefault()
       const inputs = myForml.getElementsByTagName('input')
       for(let input of inputs) {
         if(input.name !== '') {
           data[input.name] = input.value
         }
       }
       const body = JSON.stringify(data)
       fetch('/register', {
         method: 'POST',
         body: body,
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         credentials: 'include',
         body: JSON.stringify(data)
       })
       .then(response => response.json())
       .then(data => {
         if (data.error) {
           alert (data.error)
           return
         }
         loggedInUser = data
         console.log(data)
         page ('/requete')
       })
     })
    }



  const showLanguages = () => {
    render(languageHtml)

  }

  const showConnexion = () => {
    render(connexionHtml)

    const form = document.getElementsByTagName('form')[0]
    form.addEventListener('submit', evt => {
      evt.preventDefault()
      const inputs = form.getElementsByTagName('input')
      let data = {}
      for (let input of inputs) {
        if (input.name !== '') {
          data[input.name] = input.value
        }
      }

      fetch('/connexion', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
           loggedInUser = data
          if (data.accountType=="Wilder"){
           page('/aide')
         }
         else{
           page('/requete')
        }
      }
        console.log(data)
      })
    })
  }


  const showAccueil = () => {
    render(accueilhtml)
  }

  const showCoursPropose = () => {
    render(coursproposeHtml)
  }


  const checkLoginMiddleware = (context, next) => {
    console.log("exécuté avant l'affichage de la page")
    if(loggedInUser === undefined) {
      page('/connexion')
    }
    next()
  }
  // const checkLoginWilder = (context, next) => {
  //   console.log("exécuté avant l'affichage de la page")
  //   if(data.accountType=="Wilder") {
  //     page('/wilder')
  //   }
  //   next()
  // }

page('/', showAccueil)
page('/connexion', showConnexion)
page('/wilder', showInscriptionWilder)
page('/helper', showInscriptionHelper)

page('/requete',checkLoginMiddleware, showListeRequete)
page('/aide', checkLoginMiddleware, showAide)

page()

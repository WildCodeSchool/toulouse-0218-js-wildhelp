'use strict'
const targetElement = document.getElementById('main')

const accueilhtml =
 /* @html */` <div class="container-fluid">
    <header>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">Wild Help</h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="/helper">Devenir Helper</a>
        </nav>
        <a class="btn btn-outline-primary" href="/connexion">Connexion</a>
    </div> </header>
<!-- barre de recherche -->

    <div class="row background">
        <img class="imgAccueil" src="image/imgAccueil.jpg" alt="imgAccueil">
        <div class="connexion">
            <p>Welcome to the World Wilder Help!</p>
            <a href="/wilder">Inscription</a>
        </div>
    </div>
</div>

`

const inscriptionwilderhtml =
/* @html */ `<div class="button"><a href="/connexion" class="btn btn-default btn-lg active" role="button" title="Connexion">Déjà inscrit ?</a></div>
<div class="container">
   <div class="row">
      <div class="container">
         <form id="myForm" class="form-horizontal" method="POST" action="/register">
            <div class="row">
               <div class="col-md-3"></div>
               <div class="col-md-6">
                  <h1>Wilder Inscription</h1>
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
            <a href="/languages"><button type="button" id="buttonWelcome" class="btn btn-primary">Welcome !</button></a>
         </div>
      </div>
   </div>
</div>
`

const inscriptionhelperhtml =
/* @html */ `<div class="button"><a href="/connexion" class="btn btn-default btn-lg active" role="button" title="Connexion">Déjà inscrit ?</a></div>
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
            <a href="/languages"><button type="button" id="buttonWelcome" class="btn btn-primary">Welcome !</button></a>
         </div>
      </div>
   </div>
</div>
`


const languageHtml = /* @html */`
<div class="container">
    <h1>Langages proposés</h1>
    <div class="row">
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="https://developer.akamai.com/blog/wp-content/uploads/2017/03/android-logo.png" alt="Android Logo" /></a>
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="http://blog.zenika.com/wp-content/uploads/2016/04/java-logo.png" alt="Java Logo" /></a>
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="http://edmundtian.com/images/nodejs.ico" alt="JavaScript Logo" /></a>
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="http://nikhilnanjappa.github.io/img/react-logo.png" alt="React Logo" /></a>
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="https://camo.githubusercontent.com/0f946287c3cbcdd7d71f99ef18dcc506ba2e2186/687474703a2f2f7777772e69636f6e61747469747564652e636f6d2f69636f6e732f6f70656e5f69636f6e5f6c6962726172792f617070732f706e672f3235362f707974686f6e322e352e706e67" alt="Python Logo" />
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="http://muchocodigo.com/wp-content/uploads/2013/11/php.jpg" alt="Php Logo" /></a>
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="http://rodrigovenancio.info/wp-content/uploads/2017/04/1491199643_angular.png" alt="Angular Logo" />
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="http://onusinfotech.com/wp-content/uploads/2_0.png" alt="Symfony Logo" /></a>
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="https://silentbedlam.gallerycdn.vsassets.io/extensions/silentbedlam/vuejs-jquery-bootstrapprojecttemplate/1.0/1491418503089/257278/1/thumbnail.png" alt="VueJs Logo" />
        </div>
        <div class="col-md-3 col-xs-6 logo">
        <a href="/requete"><img src="http://www.flook.co/img/skills/nodejs.ico" alt="NodeJs Logo" /></a>
        </div>
    </div>
</div>
`

const connexionHtml = /* @html */` <section class="login-block">
          <div class="container" id="loginco">
              <div class="row">
                  <div class="col-md-4 login-sec">
                      <h2 class="text-center">Connexion</h2>
                      <form class="login-form">
                          <div class="form-group">
                              <label for="exampleInputEmail1" class="text-uppercase">Pseudo</label>
                              <input id="exampleInputEmail1" type="text" class="form-control" placeholder="">
                          </div>
                          <div class="form-group">
                              <label for="exampleInputPassword1" class="text-uppercase">Mot de Passe</label>
                              <input id="exampleInputPassword1" type="password" class="form-control" placeholder="">
                          </div>

                          <div class="form-check">
                              <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input">
                                  <small>Se souvenir de moi</small>
                              </label>
                              <button type="submit" class="btn btn-login float-right">Envoyer</button>
                          </div>

                      </form>
                  </div>

                  <div class="col-md-8 banner-sec">
                      <div id="carousel" class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner" role="listbox">
                              <div class="carousel-item active">
                                  <img class="d-block img-fluid" src="imagesconnexion/wil.jpg" alt="First slide">
                                  <div class="carousel-caption d-none d-md-block">
                                      <div class="banner-text">
                                          <h2>Welcome</h2>
                                          <p>Connecte toi pour accéder à la communauté Wild</p>
                                      </div>
                                  </div>
                              </div>

                              <div class="carousel-item">
                                  <img class="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="Second slide">
                                  <div class="carousel-caption d-none d-md-block">
                                      <div class="banner-text">
                                          <h2>Wild Help</h2>
                                          <p>Ici un seul mot d'ordre : l'entraide !</p>
                                      </div>
                                  </div>
                              </div>

                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </section>`

const coursproposeHtml = /* @html */ `
 <header>
      <a href="https://placeholder.com"><img class="banner" src="http://via.placeholder.com/1500x250" alt="banner"></a>
  </header>
  <div class="container">
      <div class="row">
          <div class="col-xs-8">
              <h3>Proposition de cours</h3>
              <h4>Sujet traité</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo. Maecenas pulvinar lobortis lacus, vitae malesuada turpis mollis quis. Praesent sit amet nulla vitae velit luctus mollis. Aenean rhoncus aliquam viverra. Sed sed leo ligula.</p>
          </div>
          <div class="col-xs-3 col-xs-offset-1">
              <h4>Profil helper</h4>
              <p>Lorem ipsum dolor sit amet</p>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
              <h4>Infos diverses</h4>
              <p>Date : ## </p>
              <p>Lieu : ## </p>
              <p>Places: ## </p>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12">
              <button type="button" class="btn btn-warning btn-lg">Save me too !!!</button>
          </div>
      </div>
  </div>`

const listerequeteHtml = /* @html */ `<header>
    <a href="https://placeholder.com"><img class="banner" src="http://via.placeholder.com/1500x250" alt="banner"></a>
    <div class="container">
        <h1>Wild Help</h1>
    </div>
</header>
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <h3>Liste des requêtes</h3>
            <ul class="list-group">
                <li class="list-group-item list-group-item-warning justify-content-between">
                    Requête : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo."
                    <span class="badge badge-default badge-pill"></span>
                </li>
                <li class="list-group-item list-group-item-warning justify-content-between">
                    Requête : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo."
                    <span class="badge badge-default badge-pill"></span>
                </li>
                <li class="list-group-item list-group-item-info justify-content-between">
                    Cours : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo."
                    <span class="badge badge-default list-group-item-success badge-pill">2</span>
                </li>
                <li class="list-group-item list-group-item-warning justify-content-between">
                    Requête : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo."
                    <span class="badge badge-default badge-pill"></span>
                </li>
                <li class="list-group-item list-group-item-warning justify-content-between">
                    Requête : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo."
                    <span class="badge badge-default badge-pill"></span>
                </li>
                <li class="list-group-item list-group-item-info justify-content-between">
                    Cours : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo."
                    <span class="badge badge-default list-group-item-success badge-pill">1</span>
                </li>
                <li class="list-group-item list-group-item-info justify-content-between">
                    Cours : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo."
                    <span class="badge badge-default list-group-item-success badge-pill">5</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <button type="button" class="btn btn-warning btn-lg">Help Me !!!</button>
        </div>
    </div>
</div>`

const footerForAllPage = /* @html */ `<footer>
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


  const render = htmlContent => {
    targetElement.innerHTML =  htmlContent + footerForAllPage
  }

  const showInscriptionWilder = () => {
    render(inscriptionwilderhtml)
  }
  const showInscriptionHelper = () => {
    render(inscriptionhelperhtml)
  }

  const showLanguages = () => {
    render(languageHtml)
  }

  const showConnexion = () => {
    render(connexionHtml)
  }

  const showAccueil = () => {
    render(accueilhtml)
  }

  const showCoursPropose = () => {
    render(coursproposeHtml)
  }

  const showListeRequete = () => {
    render(listerequeteHtml)
  }

page('/', showAccueil)
page('/connexion', showConnexion)
page('/wilder', showInscriptionWilder)
page('/helper', showInscriptionHelper)
page('/languages', showLanguages)
page('/cours', showCoursPropose)
page('/requete', showListeRequete)
page()

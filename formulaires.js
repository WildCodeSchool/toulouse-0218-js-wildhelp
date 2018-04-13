const mainDiv = document.getElementById('main')

const homeHtml = /* @html */ `
    <div class="container">
        <form id="formHelp" class="form-horizontal" method="POST" action="/ma-demande-de-cours">
            <div class="row">
                <div class="col-md-12">
                    <h2>Demande d'aide</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 ">
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon" style="width: 2.6rem">
                            <i class="fa fa-repeat"></i>
                        </div>
                        <select id="subject" name="subject" class="form-control" required="required">
                            <option value="" selected="">Selectionnez le langage</option>
                            <option value="JavaScriptAngular">JavaScript Angular</option>
                            <option value="JavaScriptReact">JavaScript React</option>
                            <option value="JavaScriptVue">JavaScript Vue.js</option>
                            <option value="JavaJ2EE">JAVA J2EE</option>
                            <option value="JavaAndroid">JAVA Android</option>
                            <option value="PHP">PHP</option>
                            <option value="Symfonyt">Symfony</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p>
                        <label for="sujet">Sujet requête :</label>
                        <input type="text" name="theme" id="theme" placeholder="Ex : Algorithme" size="40" maxlength="50" required="required" class="form-control" />
                    </p>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p>
                      <textarea name="ameliorer" id="ameliorer" rows="10" cols="50" required="required" class="form-control"
                      placeholder="Décris ici en détail ton problème"></textarea>
                    </p>
                </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <input class="btn btn-outline-primary" type="submit" value="Save me !" _data-toggle="modal" _data-target="#myModal"/>
              </div>
              <div class="col-md-6">
                <input class="btn btn-outline-danger" type="reset" value="Annuler" />
              </div>
            </div>
            <!-- The Modal -->
          <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Êtes-vous sûr ?</h4>
                  <input type="button" class="close" data-dismiss="modal">&times;</input>
                </div>
                <div class="modal-body">
                  Validez pour confirmer votre demande !
                </div>
                <div class="modal-footer">
                  <input type="submit" class="btn btn-primary" data-dismiss="modal" value="Valider"></input>
                </div>
              </div>
            </div>
          </div>
        </form>
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
      </footer>
      `




const render = mainHtml => {
    mainDiv.innerHTML = mainHtml
}

const home = () => {
    render(homeHtml)

    const formCours = document.getElementById('formHelp')
    formCours.addEventListener('submit', event => {



      let data = {}

      event.preventDefault()
      const formControls = formCours.getElementsByClassName('form-control')
      for(formControl of formControls) {
      if(formControl.name !== '') {
        console.log(formControl.name)
        data[formControl.name] = formControl.value
        }
      }

      const body = JSON.stringify(data)
      console.log(body)

      fetch('/ma-demande-de-cours', {
        method: 'POST',
        body: body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
    })
}
home()

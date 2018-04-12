//ladiv où je veux afficher
const mainDiv = document.getElementById('main')

const pageHelp = /* @html */ `
    <div class="container">
        <form id="formHelp" class="form-horizontal" method="POST" action="/register">
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
                        <input type="text" name="pseudo" id="pseudo" placeholder="Ex : Algorithme" size="40" maxlength="50" required="required" />
                    </p>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p>
                      <textarea name="ameliorer" id="ameliorer" rows="10" cols="50" required="required"
                      placeholder="Décris ici en détail ton problème"></textarea>
                    </p>
                </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <input class="btn btn-outline-primary" type="submit" value="Save me !" data-toggle="modal" data-target="#myModal"/>
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
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                  Validez pour confirmer votre demande !
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" type="reset" data-dismiss="modal">Confirmer</button>
                </div>
              </div>
            </div>
          </div>
        </form>
    </div>`






const render = mainHtml => {
    mainDiv.innerHTML = mainHtml
}

const home = () =>{
    render(pageHelp)






    // const formPost = getElementaryById('form-help')
    // formPost.addEvenListener('submit', event => {

    //     let data ={}

    //     event.prevenDefault()
    //     const inputs = formPost.getElementaryByName('input')
    // })
}
home()

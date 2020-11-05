const Router = require('express').Router
const router = Router()

const store = {
    resources: {
        res_id: { name: 'xx' }
    }
}

/*
get /api/resources/res_id -> renvoi la resource store.resources['res_id']
*/
/*
Exercice:

4 Routes
- 1) recuperer un objet avec son ID
- 2) creer un objet 
- 3) replace une resource avec son ID
- 4) patch une resource avec son ID
- 5) delete une resource son ID
----------------------------------------

Contraintes:
- Le plus RESTful possible (methodes, json)
- Un fichier de test:
    _> ajoute, get, modifie, get, et supprime la ressource.
*/

router.get('/resources/:id', (req, res) => {
    console.log(req.params)
    const idx = req.params.id
    const { params: { id }} = req
    res.send('ok')
})

module.exports = router

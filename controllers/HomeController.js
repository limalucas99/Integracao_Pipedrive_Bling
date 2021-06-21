var Home = require('../models/Home')

class HomeController{

    async index(req, res){
        res.send("Teste");
    }

    async getDeals(req, res){
        var deals = await Home.getWonDeals();
        res.json(deals)
    }

}

module.exports = new HomeController();
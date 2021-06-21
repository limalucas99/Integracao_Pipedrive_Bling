const axios = require('axios');
const db = require('../database/db')

class Home {

    async getWonDeals(){
        var wonDeals = await axios.get('https://minhocosam.pipedrive.com/api/v1/deals:(id,title,value,currency)?api_token=faddb605cc13499f0cfda582ef10941ba3a96446&status=won')

        return wonDeals.data.data;

    }

    async printDeals(){

    }

}

module.exports = new Home();
const router = require('express').Router();
const config = require('../../config/appconfig');
const mysqlConfig = require('../../config/mysqlConfig');
const axios = require('axios').default;
const axiosInstance = axios.create({
    baseURL: config.dremio.baseURL,
    timeout: config.dremio.timeout,
    headers: {'Content-Type': 'application/json','Accept':'application/json'}
  });

function createDataSource(req,res,mysqlConfigData)
{
    var token='';
    axiosInstance.post('/apiv2/login', {
        "userName": config.dremio.userName,
        "password": config.dremio.password
    })                 
    .then(function (response) {
        console.log(response);
        if('data' in response && 'token' in response['data'])
        {
            token = '_dremio'+response['data']['token'].trim();
            let headerConfig = {
                headers:{
                    'Authorization':token,
                    'cache-control':'no-cache'
                }
            }
            axiosInstance.post( config.dremio.baseURL+'/api/v3/catalog', mysqlConfigData,headerConfig)
            .then(function (catalogResponse) {
                console.log("########################");
                console.log(catalogResponse);
                console.log("########################");
                res.send({success:true});
            })
            .catch(function (catalogError) {
                console.log(catalogError);
                res.status(500).send({ error: catalogError });
            });

        }
    })
    .catch(function (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }); 
}
router.get('/createDS', (req, res) => {
    console.log('calling createDS');
    createDataSource(req,res,mysqlConfig);
});
router.post('/', (req, res) => {
    createDataSource(req,res,req.body);
});
router.get('/test', (req, res) => {
    return res.send("API is working fine.")
});

module.exports = router;

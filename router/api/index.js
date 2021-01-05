

const router = require('express').Router();
router.get('/', (req, res) => {
    return res.send("API is working fine :)")
});
router.use('/datasource', require('./datasource'));
module.exports = router;

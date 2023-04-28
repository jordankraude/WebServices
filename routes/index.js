const routes = require('express').Router()
const router = express.Router();

router.use('/contacts', require ('./contacts'))
module.exports = router;
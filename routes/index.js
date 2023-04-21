const routes = require('express').Router()

const controllers = require("../controllers")

routes.get('', controllers.responses)

module.exports = routes;
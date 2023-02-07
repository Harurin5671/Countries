const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require("./countries");
const activities = require("./activities");

const router = Router();

// Configurar los routers
router.use("/", countries);
router.use("/", activities);
module.exports = router;

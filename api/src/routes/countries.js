const Express = require("express");
const router = Express.Router();
const {
  getCountries,
  getCountryById,
} = require("../controllers/country.controller");

router.get("/countries", getCountries);

router.get("/countrie/:id", getCountryById);

module.exports = router;

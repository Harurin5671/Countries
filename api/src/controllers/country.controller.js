const axios = require("axios");
const { Country, Activity } = require("../db");

const getApiInfo = async () => {
  const apiInfo = await axios.get("https://restcountries.com/v3/all");
  const json = await apiInfo.data.map((c) => {
    const countrie = {
      id: c.cca3,
      name: c.name.common,
      capital: c.capital != null ? c.capital[0] : "No data",
      subregion: c.subregion,
      population: c.population,
      continents: c.continents[0],
      flags: c.flags[0],
      area: c.area,
    };
    return countrie;
  });
  return json;
};

const countriesToDb = async () => {
  try {
    const countries = await Country.findAll();
    if (!countries.length) {
      const array = await getApiInfo();
      const dataCreated = await Country.bulkCreate(array);
    }
  } catch (error) {
    console.error(error);
  }
};

const getCountries = async (req, res) => {
  try {
    await countriesToDb();
    const { name } = req.query;
    if (name) {
      const data = await Country.findOne({ where: { name } });
      if (data) {
        res.json(data);
      } else {
        res.status(401).json({ message: "This country not exist" });
      }
    } else {
      const datos = await Country.findAll({
        include: [
          {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
          },
        ],
      });
      res.json(datos);
    }
  } catch (err) {
    console.error(err);
  }
};

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Country.findByPk(id, {
      include: [
        {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] },
        },
      ],
    });
    res.json(data);
  } catch (err) {
    console.error(error);
  }
};

module.exports = { getCountries, getCountryById };

const { Activity, Country } = require("../db.js");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    if (activities.length) {
      return res.status(200).json(activities);
    } else {
      return res
        .status(404)
        .json(activities.length ? activities : "No se encontraron actividades");
    }
  } catch (err) {
    console.error(err);
  }
};

const getActivityById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      try {
        let dbId = await Activity.findByPk(id, { include: Country });
        res.status(200).json([dbId]);
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const createActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if (!name && !difficulty && !duration && !season && !countries) {
      return res.send("Debes llenar todos los datos");
    }
    let createActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    countries.forEach(async (name) => {
      const country = await Country.findOne({
        where: { name },
      });
      await country?.addActivity(createActivity);
    });
    res.json(createActivity);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getActivities, getActivityById, createActivity };

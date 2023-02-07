const Express = require("express");
const router = Express.Router();
const {
  getActivities,
  getActivityById,
  createActivity,
} = require("../controllers/activities.controller");

router.get("/activities", getActivities);

router.get("/activities/:id", getActivityById);

router.post("/create", createActivity);

module.exports = router;

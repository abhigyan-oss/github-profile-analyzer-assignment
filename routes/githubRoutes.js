const express = require("express");
const router = express.Router();

const {
  analyzeProfile,
  getProfiles,
  getProfile,
} = require("../controllers/githubController");

router.post("/analyze/:username", analyzeProfile);

router.get("/", getProfiles);

router.get("/:username", getProfile);

module.exports = router;
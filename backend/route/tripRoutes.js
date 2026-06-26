const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createTrip, getTrip, deleteTrip, updateTrip
} = require("../controller/tripController");

router.post("/create",authMiddleware,createTrip);

router.get("/", authMiddleware,getTrip);
router.put("/:id", authMiddleware, updateTrip);
router.delete("/:id",authMiddleware,deleteTrip);

module.exports = router;
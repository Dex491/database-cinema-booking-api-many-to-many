const express = require("express");
const { route } = require("./server");
const { getAllSeatsByScreenID, createTickets } = require("./controllers");
const router = express.Router();

router.route("/seats/:id").get(getAllSeatsByScreenID);
router.route("/tickets").post(createTickets);

module.exports = router;

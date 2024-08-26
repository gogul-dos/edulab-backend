const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Define routes for event management
router.post("/events", eventController.createEvent);
router.put("/events/:id", eventController.updateEvent);
router.delete("/events/:id", eventController.deleteEvent);
router.get("/events/:id/report", eventController.getEventReport);

module.exports = router;

const { Event, Session, Participant } = require("../models/eventModel");

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing event
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Event.update(req.body, { where: { id } });
    if (updated) {
      const updatedEvent = await Event.findByPk(id);
      res.status(200).json(updatedEvent);
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Event.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get detailed event report
exports.getEventReport = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id, {
      include: [{ model: Session }, { model: Participant }],
    });
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

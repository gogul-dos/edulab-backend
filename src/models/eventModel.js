const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

// Define Event model
const Event = sequelize.define("Event", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define Session model
const Session = sequelize.define("Session", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define Participant model
const Participant = sequelize.define("Participant", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Establish relationships
Event.hasMany(Session, { onDelete: "CASCADE" });
Session.belongsTo(Event);

Event.hasMany(Participant, { onDelete: "CASCADE" });
Participant.belongsTo(Event);

module.exports = { Event, Session, Participant };

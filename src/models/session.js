module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define("Session", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speaker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Session;
};

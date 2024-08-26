module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define("Participant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  });

  return Participant;
};
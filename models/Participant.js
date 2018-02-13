module.exports = function(sequelize, DataTypes) {
  var Participant = sequelize.define('Participant', {
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      	len: [1]
      }
    }
  });

  Participant.associate = function(model) {
    Participant.belongsTo(model.Classroom);
  }

  return Participant;
}
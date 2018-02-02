module.exports = function(sequelize, DataTypes) {
  var Classroom = sequelize.define('Classroom', {
    instructor: {
      type: DataTypes.INTEGER
    }
  })

  return Classroom;
}
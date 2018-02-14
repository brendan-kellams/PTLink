module.exports = function(sequelize, DataTypes) {
  var Classroom = sequelize.define('Classroom', {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    period: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1]
      }
    },    
    grade: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },    
    schoolyear: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    schoolName: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    }
  });

  Classroom.associate = function(model) {
    Classroom.belongsTo(model.User, {as: 'instructor'});
    Classroom.hasMany(model.Assignment);
    Classroom.hasMany(model.Participant);
  }

  return Classroom;
}
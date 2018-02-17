module.exports = function(sequelize, DataTypes) {
  var Assignment = sequelize.define('Assignment', {
    lessondate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      	len: [1]
      }
    },
    link: {
      type: DataTypes.TEXT
    },
    topics: {
      type: DataTypes.STRING
    },    
    homework: {
      type: DataTypes.TEXT
    },    
    duedate: {
      type: DataTypes.STRING
    }   
  });

  return Assignment;
}

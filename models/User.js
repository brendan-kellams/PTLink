module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    isTeacher: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });

  User.associate = function(model) {
    User.hasMany(model.Communication, {
      // as: 'sender',
      foreignKey: 'senderId',
      constraints: false
    });
  }


  return User;
}
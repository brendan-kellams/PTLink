module.exports = function(sequelize, DataTypes) {
  var Communication = sequelize.define('Communication', {
    subject: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },    
    body: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },    
    unread: {
      type: DataTypes.BOOLEAN,
      default: true
    }   
  });

  Communication.associate = function(model){
    Communication.belongsToMany(model.User, {
      through: 'UserCommunication'
    });
  }

  return Communication;
}
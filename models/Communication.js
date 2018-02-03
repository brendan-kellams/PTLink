module.exports = function(sequelize, DataTypes) {
  var Communication = sequelize.define('Communication', {
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      	len: [1]
      }
    },
    recipient: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
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

  return Communication;
}
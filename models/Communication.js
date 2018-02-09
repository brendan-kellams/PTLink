module.exports = function(sequelize, DataTypes) {
  console.log(sequelize.models);
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
    }
  });

  Communication.associate = function(model){
    Communication.belongsTo(model.User, {
      foreignKey: 'senderId',
      constraints: false
    })
    Communication.hasMany(model.SentCommunication);
  }

  return Communication;
}
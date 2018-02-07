module.exports = function(sequelize, DataTypes) {
  var UserCommunication = sequelize.define('UserCommunication', {
    unread: {
      type: DataTypes.BOOLEAN,
      default: true
    }
  });
  return UserCommunication;
}
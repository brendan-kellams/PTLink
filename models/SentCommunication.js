module.exports = function(sequelize, DataTypes) {
  var SentCommunication = sequelize.define('SentCommunication', {
    unread: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    // recipientId: {
    //   type: DataTypes.BIGINT
    // }
  });

  SentCommunication.associate = function(model) {
    SentCommunication.belongsTo(model.Communication);
    SentCommunication.belongsTo(model.User, {
      foreignKey: 'recipientId'
    });
  };
  return SentCommunication;
}
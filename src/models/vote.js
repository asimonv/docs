module.exports = function defineVote(sequelize, DataTypes) {
  const Vote = sequelize.define('Vote', {
    voteType: DataTypes.INTEGER,
  });
  Vote.associate = function associate(models) {
    // associations can be defined here
    Vote.belongsTo(models.Teacher);
  };

  return Vote;
};

module.exports = function defineTeacher(sequelize, DataTypes) {
  const Teacher = sequelize.define('Teachers', {
    name: DataTypes.STRING,
    popularity: DataTypes.INTEGER,
    clarity: DataTypes.FLOAT,
    knowledge: DataTypes.FLOAT,
    demand: DataTypes.FLOAT,
    disposition: DataTypes.FLOAT,
  });
  Teacher.associate = function associate(models) {
    // associations can be defined here
    Teacher.hasMany(models.Vote, { as: 'votes' });
  };

  return Teacher;
};

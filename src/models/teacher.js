module.exports = function defineTeacher(sequelize, DataTypes) {
  const Teacher = sequelize.define('teacher', {
    name: DataTypes.STRING,
    popularity: DataTypes.INTEGER,
    clarity: DataTypes.FLOAT,
    knowledge: DataTypes.FLOAT,
    demand: DataTypes.FLOAT,
    disposition: DataTypes.FLOAT,
    url: DataTypes.STRING,
  });

  Teacher.associate = function associate(models) {
    // associations can be defined here
    Teacher.hasMany(models.TeacherCourse, { foreignKey: 'teacherId', sourceKey: 'id' });
  };

  Teacher.prototype.toJSON = function toJSON() {
    const values = Object.assign({}, this.get());
    values.stats = {
      popularity: this.popularity,
      clarity: this.clarity,
      knowledge: this.knowledge,
      demand: this.demand,
      disposition: this.disposition,
    };
    return values;
  };


  Teacher.prototype.getStats = async function getStats(userId) {
    const query = `
      select
        votes."voteType",
        count(votes."id") as voteCount,
        sum(votes.value) as sumValue,
        cast(sum(votes.value) as decimal)/count(votes."id") as rate,
        count(votes."userId" = :userId OR NULL) AS voted
      from
        votes
      group by
        votes."voteType";
    `;

    return sequelize.query(query, {
      raw: true,
      replacements: {
        userId,
      },
    });
  };

  return Teacher;
};

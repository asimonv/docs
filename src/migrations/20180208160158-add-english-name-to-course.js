module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Courses',
      'englishName',
      Sequelize.STRING,
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Courses',
      'englishName',
      Sequelize.STRING,
    );
  },
};

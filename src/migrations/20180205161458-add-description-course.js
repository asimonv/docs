module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Courses',
      'description',
      Sequelize.TEXT,
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Courses',
      'description',
      Sequelize.TEXT,
    );
  },
};

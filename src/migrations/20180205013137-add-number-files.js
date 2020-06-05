module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Files',
      'courseNumber',
      Sequelize.STRING,
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Files',
      'courseNumber',
      Sequelize.STRING,
    );
  },
};

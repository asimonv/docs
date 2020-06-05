/* eslint no-unused-vars: "off" */

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Files',
      'path',
      Sequelize.STRING,
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Files',
      'path',
      Sequelize.STRING,
    );
  },
};

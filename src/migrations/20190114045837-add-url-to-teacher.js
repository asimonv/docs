module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Teachers',
      'url', {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Teachers',
      'url', {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },
};

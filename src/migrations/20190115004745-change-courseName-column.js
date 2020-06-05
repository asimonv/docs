/*  eslint no-unused-vars: ["error", { "args": "none" }]  */

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.renameColumn('TeacherCourses', 'courseName', 'courseNumber');
  },

  down(queryInterface, Sequelize) {
    return queryInterface.renameColumn('TeacherCourses', 'courseNumber', 'courseName');
  },
};

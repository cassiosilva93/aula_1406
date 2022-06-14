'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { name: 'Lucas Aboud', email: 'lucas@gmail.com' },
      { name: 'Rodrigo', email: 'rodrigo@gmail.com' },
      { name: 'José', email: 'josé@gmail.com' },
      { name: 'Ana', email: 'ana@gmail.com' },
      { name: 'Gabriel', email: 'gabriel@gmail.com' },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("inputs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_provider: {
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      yield: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      value_package: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      unit_cost: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("inputs");
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
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
      id_client: {
        type: Sequelize.INTEGER,
      },
      total_cost: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      labor: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      art: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      others: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      sale_value: {
        type: Sequelize.DECIMAL(12, 6),
        allowNull: false,
      },
      profit: {
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
    await queryInterface.dropTable("products");
  },
};

"use strict";
import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `INSERT INTO "users" (id, "name", username, password_hash, created_at, updated_at) VALUES('-1', 'Admin', 'admin', '2a$08$fNszwDWbdaSd1pO7ZFdS3uW5TOtk90Eh0SHpv0hIMzQSSdm0r4XfC', CURRENT_DATE,CURRENT_DATE)`
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DELETE FROM "users" WHERE id = -1`);
  },
};

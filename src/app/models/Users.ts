import { DataTypes, Model, Sequelize } from "sequelize";
import { database } from "./index";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface IUsers {
  id?: number;
  name?: string;
  username?: string;
  password?: string;
  password_hash?: string;
  created_at?: Date;
  updated_at?: Date;
  checkPassword?: Function;
  generateToken?: Function;
}

export class Users extends Model {
  public id!: number;
  public name!: string;
  public username!: string;
  public password!: string;
  public password_hash!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public checkPassword!: Function;
  public generateToken!: Function;
}

Users.init(
  {
    id: {
      type: DataTypes.NUMBER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
    },
    password_hash: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: database,
    tableName: "users",
    hooks: {
      beforeSave: async (user) => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      },
    },
  }
);

Users.prototype.checkPassword = function (password: string) {
  return bcrypt.compare(password, this.password_hash);
};

Users.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.APP_SECRET);
};

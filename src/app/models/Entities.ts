import { DataTypes, Model } from "sequelize";
import { database } from "./index";

export interface IEntities {
  id?: number;
  name?: string;
  provider?: boolean;
  client?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export class Entities extends Model {
  public id!: number;
  public name!: string;
  public provider!: boolean;
  public client!: boolean;
  public created_at!: Date;
  public updated_at!: Date;
}

Entities.init(
  {
    id: {
      type: DataTypes.NUMBER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    client: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    tableName: "entities",
  }
);

import { DataTypes, Model } from "sequelize";
import { database } from "./index";

export interface IProducts {
  id?: number;
  name?: string;
  id_provider?: number;
  amount?: number;
  yield?: number;
  value_package?: number;
  unit_cost?: number;
  created_at?: Date;
  updated_at?: Date;
}

export class Products extends Model {
  public id!: number;
  public name!: string;
  public id_provider!: number;
  public amount!: number;
  public yield!: number;
  public value_package!: number;
  public unit_cost!: number;
  public created_at!: Date;
  public updated_at!: Date;
}

Products.init(
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
    id_provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    yield: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    value_package: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    unit_cost: {
      type: DataTypes.DECIMAL(12, 6),
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
    tableName: "products",
  }
);

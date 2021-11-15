import { DataTypes, Model } from "sequelize";
import { database } from "./index";

export interface IProducts {
  id?: number;
  id_product?: number;
  id_input?: number;
  description?: string;
  amount?: number;
  unit_cost?: number;
  total_cost?: number;
  created_at?: Date;
  updated_at?: Date;
}

export class Products extends Model {
  public id!: number;
  public id_product!: number;
  public id_input!: number;
  public description!: string;
  public amount!: number;
  public unit_cost!: number;
  public total_cost!: number;
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
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_input: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    unit_cost: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    total_cost: {
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

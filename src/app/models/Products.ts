import { DataTypes, Model } from "sequelize";
import { database } from "./index";

export interface IProducts {
  id?: number;
  name?: string;
  id_client?: number;
  total_cost?: number;
  labor?: number;
  art?: number;
  others?: number;
  sale_value?: number;
  profit?: number;
  created_at?: Date;
  updated_at?: Date;
}

export class Products extends Model {
  public id!: number;
  public name!: string;
  public id_client!: number;
  public total_cost!: number;
  public labor!: number;
  public art!: number;
  public others!: number;
  public sale_value!: number;
  public profit!: number;
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
    id_client: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_cost: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    labor: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    art: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    others: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    sale_value: {
      type: DataTypes.DECIMAL(12, 6),
      allowNull: false,
    },
    profit: {
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

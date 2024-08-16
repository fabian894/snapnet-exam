import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Product from './product.model';
import Warehouse from './warehouse.model';

class Stock extends Model {
    [x: string]: any;
}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
    warehouseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Warehouse,
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Stock',
    tableName: 'stocks',
  }
);

export default Stock;
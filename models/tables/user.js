const {Sequelize, DataTypes, Model} = require("sequelize")

class User extends Model {
    static init(sequelize) {
      super.init(
        {
          user_num: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING(10),
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING(30),
            allowNull: false,
          },
          id: {
            type: DataTypes.STRING(30),
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING(512),
            allowNull: false,
          },
          phonenum: {
            type: DataTypes.STRING(30),
            allowNull: false,
          },
          address: {
            type: DataTypes.STRING(30),
            allowNull: false,
          },
        },
        {
          sequelize,
          freezeTableName: true,
          modelName: 'user',
          timestamps: true,
          updatedAt: true,
          paranoid: true,
          charset: 'utf8',
          collate: 'utf8_general_ci',
        },
      );
    }
  }
  module.exports = User;
const { DataTypes } = require('sequelize');
const db = require('../database');

const Menu = db.define('Menu', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: DataTypes.STRING(150),
  imageUrl: DataTypes.STRING(150),
  stok: DataTypes.INTEGER(3),
  harga: DataTypes.INTEGER(7),
});

module.exports = Menu;

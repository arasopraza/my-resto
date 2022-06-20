const { DataTypes } = require('sequelize');
const db = require('../database');
const Menu = require('./Menu');

const Transaction = db.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: DataTypes.STRING(150),
  alamat: DataTypes.STRING(150),
});

Transaction.belongsTo(Menu, { onDelete: 'CASCADE' });

module.exports = Transaction;

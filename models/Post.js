const { DataTypes } = require("sequelize");
const db = require("../database");

const Post = db.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  namaMenu: DataTypes.STRING(150),
  stok: DataTypes.INTEGER(155),
  harga: DataTypes.INTEGER(155),
});

module.exports = Post;

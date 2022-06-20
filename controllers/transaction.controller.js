const Transaction = require('../models/Transaction');
const Menu = require('../models/menu');
const { Sequelize } = require('sequelize');

module.exports = {
  index: async (req, res) => {
    const transactions = await Transaction.findAll({
      include: [{ model: Menu }],
    });
    return res.render('transaction/index', {
      transactions,
    });
  },

  createOrder: async (req, res) => {
    const menu = await Menu.findByPk(req.params.id);
    return res.render('transaction/create', { menu });
  },

  store: async (req, res) => {
    await Transaction.create(req.body);
    await Menu.update(
      { stok: Sequelize.literal('stok - 1') },
      { where: { id: req.body.MenuId } },
    );
    return res.redirect('/');
  },

  delete: async (req, res) => {
    await Transaction.destroy({ where: { id: req.params.id } });
    return res.redirect('/transactions');
  },
};

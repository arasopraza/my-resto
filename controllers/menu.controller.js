const Menu = require('../models/menu');

module.exports = {
  index: async (req, res) => {
    const menus = await Menu.findAll();
    return res.render('menu/index', {
      menus,
    });
  },

  order: async (req, res) => {
    const menus = await Menu.findAll();
    return res.render('transaction/order', {
      menus,
    });
  },

  details: async (req, res) => {
    const menu = await Menu.findByPk(req.params.id);
    return res.render('menu/details', { menu });
  },

  create: async (req, res) => {
    return res.render('menu/create');
  },

  store: async (req, res) => {
    await Menu.create(req.body);

    return res.redirect('/menus');
  },

  delete: async (req, res) => {
    await Menu.destroy({ where: { id: req.params.id } });
    return res.redirect('/menus');
  },

  edit: async (req, res) => {
    const menu = await Menu.findByPk(req.params.id);
    return res.render('menu/edit', { menu });
  },

  update: async (req, res) => {
    await Menu.update(req.body, { where: { id: req.params.id } });
    return res.redirect('/menus');
  },
};

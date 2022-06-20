const menuController = require('../controllers/menu.controller');
const transactionController = require('../controllers/transaction.controller');
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/menus', menuController.index);
router.get('/menus/create', menuController.create);
router.post('/menus/store', menuController.store);
router.get('/menus/:id', menuController.details);
router.get('/menus/:id/edit', menuController.edit);
router.post('/menus/:id/update', menuController.update);
router.get('/menus/:id/delete', menuController.delete);

router.get('/', menuController.order);
router.get('/order/:id', transactionController.createOrder);
router.post('/transactions/store', transactionController.store);
router.get('/transactions', transactionController.index);
router.get('/transactions/:id/delete', transactionController.delete);

module.exports = router;

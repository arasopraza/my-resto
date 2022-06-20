const menuController = require("../controllers/menu.controller");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", menuController.index);
router.get("/menus/create", menuController.create);
router.post("/menus/store", menuController.store);
router.get("/menus/:id", menuController.details);
router.get('/menus/:id/edit', menuController.edit);
router.post('/menus/:id/update', menuController.update);
router.get('/menus/:id/delete', menuController.delete);

module.exports = router;

const router = require("express").Router(),
  {
    def,
    create,
    view,
    update,
    remove
  } = require("../../controllers/dashboard/employees");

router.post("/create", create);
router.get("/view", view);
router.put("/update", update);
router.delete("/remove", remove);
router.use("/", def);

module.exports = router;

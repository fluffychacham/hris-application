const router = require("express").Router(),
  {
    def,
    create,
    view,
    update,
    remove
  } = require("../../controllers/dashboard/company");

router.post("/create", create);
router.get("/list", view);
router.put("/update", update);
router.delete("/delete", remove);
router.use("/", def);

module.exports = router;
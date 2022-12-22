const express = require("express");
const router = express.Router();
const controller = require("../controller/board.controller");

router.get("/list", controller.list);

router.get("/view", controller.view);

router.get("/write", controller.getWrite);

router.post("/write", controller.postWrite);

router.get("/modify", controller.getModify);

router.post("/modify", controller.postModify);

router.get("/delete", controller.delete);

module.exports = router;


import { Router } from "express";
const { schemas, addSchemaForChange, updateStateSchema } = require("../../models/todo");
const validateBody = require("../../middleware/validateBody");
const isValidId = require("../../middleware/isValidId");
const { todos: ctrl } = require("../../controllers");
const  ctrlWrapper  = require("../../helpers/ctrlWrapper");


const router = Router();

router.get("/forCurrent", ctrlWrapper(ctrl.getAllForCurrentCard));

// router.get("/myrecipes/", reloadUser, ctrlWrapper(ctrl.getAllForRecentUser));

// router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post(
  "/",
validateBody(schemas.addSchema),
 ctrlWrapper(ctrl.add)
);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchemaForChange),
  ctrlWrapper(ctrl.updateById)
);

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

router.patch(
  "/:id/state",
  isValidId,
  validateBody(schemas.updateStateSchema),
  ctrlWrapper(ctrl.updateState)
);

module.exports = router;



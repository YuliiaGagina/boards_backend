
import { Router } from "express";
const { schemas, addSchemaForChange, updateStateSchema } = require("../../models/todo");
const validateBody = require("../../middleware/validateBody");
const isValidId = require("../../middleware/isValidId");
const { todos: ctrl } = require("../../controllers");
const  ctrlWrapper  = require("../../helpers/ctrlWrapper");


const router = Router();

enum Routes {
  FORCURRENT = "/forCurrent",
  ID = "/:id", 
  STATE = "/:id/state",
  ADD = "/"
}

router.get(Routes.FORCURRENT, ctrlWrapper(ctrl.getAllForCurrentCard));

// router.get("/myrecipes/", reloadUser, ctrlWrapper(ctrl.getAllForRecentUser));

// router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post(
  Routes.ADD,
validateBody(schemas.addSchema),
 ctrlWrapper(ctrl.add)
);

router.put(
  Routes.ID,
  isValidId,
  validateBody(schemas.addSchemaForChange),
  ctrlWrapper(ctrl.updateById)
);

router.delete(Routes.ID, isValidId, ctrlWrapper(ctrl.removeById));

router.patch(
  Routes.STATE,
  isValidId,
  validateBody(schemas.updateStateSchema),
  ctrlWrapper(ctrl.updateState)
);

module.exports = router;



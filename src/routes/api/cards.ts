
import { Router } from "express";
const { cards: ctrl } = require("../../controllers");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const { schemas, addSchemaForChange, updateStateSchema } = require("../../models/card");
const validateBody = require("../../middleware/validateBody");
const isValidId = require("../../middleware/isValidId");

const router = Router();


enum Routes {
    GET = "/",
    CARDID = "/:id",
    ADDCARD = "/"
}




router.get(Routes.GET,  ctrlWrapper(ctrl.getAll));
router.get(Routes.CARDID, ctrlWrapper(ctrl.getOne));
router.post(Routes.ADDCARD, validateBody(schemas.joiCardSchema), ctrlWrapper(ctrl.addCard))
router.delete(Routes.CARDID, isValidId, ctrlWrapper(ctrl.deleteById));

module.exports =  router;

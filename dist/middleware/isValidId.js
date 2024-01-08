"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isValidObjectId = require("mongoose").isValidObjectId;
var RequestError = require("../helpers").RequestError;
var isValidId = function (req, res, next) {
    var id = req.params.id;
    var isCorrectId = isValidObjectId(id);
    if (!isCorrectId) {
        var error = RequestError(400, "".concat(id, " is not correct id format"));
        next(error);
    }
    next();
};
module.exports = isValidId;

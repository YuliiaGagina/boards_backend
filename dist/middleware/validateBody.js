"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HttpError_1 = __importDefault(require("../helpers/HttpError"));
var validateBody = function (schema) {
    var func = function (req, res, next) {
        var error = schema.validate(req.body).error;
        if (error) {
            return next((0, HttpError_1.default)(400, error.message));
        }
        // Цей рядок викликатимет next лише у випадку відсутності помилки валідації
        next();
    };
    return func;
};
module.exports = validateBody;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Joi = require("joi");
var cardSchema = new mongoose_1.Schema({
    name: {
        type: Number,
        required: true,
        match: [/^\d{3}$/, "Неправильний формат назви дошки"]
    },
}, { versionKey: false, timestamps: true });
var joiCardSchema = Joi.object({
    name: Joi.number().required(),
});
var Card = (0, mongoose_1.model)("card", cardSchema);
module.exports = {
    Card: Card,
    joiCardSchema: joiCardSchema
};

"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Joi = require("@hapi/joi");
var handleSchemaValidationErrors = require("../helpers/handleSchemaValidationErrors");
var stateList = [
    "To do",
    "In progress",
    "Done",
];
var todoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: stateList,
        default: "To do",
        required: true,
    },
    cardId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "сard",
        required: true,
    },
}, { versionKey: false, timestamps: true });
var addSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    state: (_a = Joi.string())
        .valueOf.apply(_a, stateList).required(),
    cardId: Joi.string().required(),
});
var addSchemaForChange = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
});
var updateStateSchema = Joi.object({
    state: (_b = Joi.string())
        .valueOf.apply(_b, stateList).required()
});
todoSchema.post("save", handleSchemaValidationErrors);
var schemas = {
    addSchema: addSchema,
    addSchemaForChange: addSchemaForChange,
    updateStateSchema: updateStateSchema
};
var Todo = (0, mongoose_1.model)("todo", todoSchema);
module.exports = {
    Todo: Todo,
    schemas: schemas,
};

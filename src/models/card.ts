import { Schema, model, Document } from "mongoose";
const Joi = require("joi");

export interface ICard extends Document {
  name: string;
}

const cardSchema = new Schema(
  {
    name: {
      type: Number,
      required: true,
      match: [/^\d{3}$/, "Неправильний формат назви дошки, це мають бути 3 цифри"],
    },
    todos: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiCardSchema = Joi.object({
  name: Joi.number().required(),
  todos: Joi.array(),
});


const schemas = {
  joiCardSchema

};

const Card = model<ICard>("card", cardSchema);

module.exports = {
  Card,
  schemas
};

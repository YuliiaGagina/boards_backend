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
       match: [/^\d{3}$/, "Неправильний формат назви дошки"]
   
    },
   
  },
  { versionKey: false, timestamps: true }
);

const joiCardSchema = Joi.object({
  name: Joi.number().required(),
  
   
});



const Card = model<ICard>("card", cardSchema);

module.exports = {
  Card,
  joiCardSchema
  
};


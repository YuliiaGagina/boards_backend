import { Schema, model, Document } from "mongoose";
const Joi = require("@hapi/joi");
// const Joi = require("joi");
// const Joi = require("@hapi/joi").extend(require("joi-objectid"));

export interface ITodo extends Document {
  title: string;
    description: string;
    state: string,
    
}

const handleSchemaValidationErrors = require("../helpers/handleSchemaValidationErrors");
const stateList = [
  "To do",
  "In progress",
  "Done",

];

const todoSchema: Schema = new Schema(
  {
   
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
      type: Schema.Types.ObjectId,
      ref: "сard",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  state: Joi.string()
    .valueOf(...stateList)
    .required(),
  cardId: Joi.string().required(),
 
 
});

const addSchemaForChange = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const updateStateSchema = Joi.object({

  state: Joi.string()
    .valueOf(...stateList)
    .required()
  
});

todoSchema.post("save", handleSchemaValidationErrors);

const schemas = {
  addSchema,
  addSchemaForChange,
  updateStateSchema

};

const Todo = model<ITodo>("todo", todoSchema);


module.exports = {
  Todo,
  schemas,
};



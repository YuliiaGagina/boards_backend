const { Todo } = require("../../models/todo");
import { Request, Response,  } from "express";

const { RequestError } = require("../../helpers");

const updateById = async (req:Request, res:Response ) => {
    const { id } = req.params;
    const existingTodo = await Todo.findById(id);
    const result = await Todo.findByIdAndUpdate(
    id,
    { CardId: existingTodo.CardId, state: existingTodo.state, ...req.body },
    { new: true }
  );
  if (!result) {
    throw RequestError(404, "not Found");
  }
  res.json(result);
};

module.exports = updateById;
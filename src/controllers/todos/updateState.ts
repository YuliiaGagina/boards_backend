const { Todo } = require("../../models/todo");
import { Request, Response,  } from "express";
const { RequestError } = require("../../helpers");

const updateState = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(404, "not Found");
  }
  res.json(result);
};



module.exports = updateState;
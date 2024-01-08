const { Todo } = require("../../models/todo");
const { RequestError } = require("../../helpers");
import { Request, Response,  } from "express";

const removeById = async (req:Request , res: Response) => {
  const { id } = req.params;
  const result = await Todo.findByIdAndDelete(id);
  if (!result) {
    throw RequestError(404, "not Found");
  }
  res.json({
    message: "Task deleted successfully",
  });
};
module.exports = removeById;

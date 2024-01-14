const { Card } = require("../../models/card");
const { RequestError } = require("../../helpers");
import { Request, Response,  } from "express";

const deleteById = async (req:Request , res: Response) => {
  const { id } = req.params;
  const result = await Card.findByIdAndDelete(id);
  if (!result) {
    throw RequestError(404, "not Found");
  }
  res.json({
    message: "Card deleted successfully",
  });
};
module.exports = deleteById;

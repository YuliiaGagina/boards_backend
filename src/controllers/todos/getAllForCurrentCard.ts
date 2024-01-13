import { Request, Response, NextFunction } from "express";
const { Todo } = require("../../models/todo");
import { RequestHandler } from "express";
import mongoose, { Document, Schema } from "mongoose";

const isValidObjectId = (id: string): boolean =>
  mongoose.Types.ObjectId.isValid(id);

const getAllForCurrentCard: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cardId = req.query.cardId as string;
  console.log(cardId);

  if (!cardId || !isValidObjectId(cardId)) {
    return res.status(400).json({ error: "Invalid cardId" });
  }

  const todos = await Todo.find({
    cardId: new mongoose.Types.ObjectId(cardId),
  });

  return res.status(200).json({ todos });
};

module.exports = getAllForCurrentCard;

const { Card } = require("../../models/card");
import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express";

const addCard: RequestHandler = async (req: Request, res: Response) => {
  const newCard = {
    name: req.body.name,
    todos: req.body.todos || [],
  };

  const result = await Card.create({ ...newCard });

  res.status(201).json(result);
};

module.exports = addCard;

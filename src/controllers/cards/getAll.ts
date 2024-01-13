const { Card } = require("../../models/card");

import { RequestHandler } from "express";
import { Request, Response } from "express";
interface ICard extends Document {
  name: string;
}

const getAll: RequestHandler = async (req: Request, res: Response) => {

  const result: ICard[] = await Card.find({}, "-createdAt -updatedAt", );

  res.status(200).json(result);
};

module.exports = getAll;

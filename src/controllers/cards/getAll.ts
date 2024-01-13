const { Card } = require("../../models/card");

import { RequestHandler } from "express";
import { Request, Response } from "express";
interface ICard extends Document {
  name: string;
}

const getAll: RequestHandler = async (req: Request, res: Response) => {
  const { page = "1", limit = "9" } = req.query as {
    page?: string;
    limit?: string;
  };
  const skip = (parseInt(page) - 1) * parseInt(limit);

  const result: ICard[] = await Card.find({}, "-createdAt -updatedAt", {
    skip,
    limit: +limit,
  });

  res.status(200).json(result);
};

module.exports = getAll;

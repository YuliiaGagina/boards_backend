
const { Card}= require("../../models/card");
import { RequestHandler } from "express";

interface ICard extends Document {
    name: string;
}

const getAll: RequestHandler<{}, {}, {}, { page?: string; limit?: string }> = async (req, res) => {
  const { page = "1", limit = "9" } = req.query as { page?: string; limit?: string };
  const skip = (parseInt(page) - 1) * parseInt(limit);

  const result: ICard[] = await Card.find({}, "-createdAt -updatedAt", {
      skip,
      limit: +limit,
    });

    res.json(result);
 
  
  }


module.exports = getAll;
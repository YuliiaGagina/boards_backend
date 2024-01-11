const { Card } = require("../../models/card") ; 
const { Todo } = require("../../models/todo");
const { RequestError } = require("../../helpers");
import { Request, Response} from "express";
const getById = async (req: Request, res: Response,) => {
  const { id } = req.params;
    const oneCard = await Card.findById(id);
    
  if (!oneCard) {
    throw RequestError("404", "Not found");
    }
    
      const todos = await Todo.find({ cardId: id });

    // Include todos in the result
    const result = { ...oneCard.toObject(), todos };

    res.json(result);
  
};

module.exports = getById;

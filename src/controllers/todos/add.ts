const { Todo } = require("../../models/todo");
const { Card } = require("../../models/card") ; 
import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express";

const todos = [];

const add: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
 
    const { cardId } = req.body;

    // Перевірка чи існує карта з вказаним ID
    const existingCard = await Card.findOne({ _id: cardId });

    if (!existingCard) {
      return res.status(400).json({ error: "Card does not exist" });
    }

    // Створення нового todo
    const newTodo = {
      title: req.body.title,
      description: req.body.description,
      state: req.body.state,
      cardId: cardId,
    };

   
    const result = await Todo.create({ ...newTodo });

    res.status(201).json(result);

  
    
 
};

module.exports = add;

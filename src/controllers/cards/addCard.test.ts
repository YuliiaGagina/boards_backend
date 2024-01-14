
const { cards: ctrl } = require("../../controllers");
const { Card }  = require("../../models/card");
import { Request, Response } from "express";







describe('/api/cards', () => {
  it("додавання нової карти з коректними даними", async () => {
   
    const req = {
      body: {
        name: "999",
        todos: [],
      },
    } as Request;

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

  
    await ctrl.addCard(req, res);

  
    expect(res.status).toHaveBeenCalledWith(201);

    
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      name: "999",
      todos: [],
    }));

   
    expect(Card.create).toHaveBeenCalledWith({
      name: "999",
      todos: [],
    });
  }, 15000);


});

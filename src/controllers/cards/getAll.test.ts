const { cards: ctrl } = require("../../controllers");
import { Server } from 'http';
import express from "express";
import mongoose from "mongoose";
import { DB, PORT } from "../../config";

describe('/api/cards', () => {
  let server: Server;
  const app = express();

  beforeAll(() => {
    console.log("Server is starting...");
   mongoose.set("strictQuery", true);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log(`Listening On PORT ${PORT}`);
    });
  })
  .catch((err) => {
    throw  err;
  });
  });

 

  describe("/", () => {
    it("should return all cards", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      // Викликайте функцію getAll та очікуйте завершення асинхронної операції
      await ctrl.getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalled();
    }, 5000); // Зменшіть таймаут на бажану кількість мілісекунд
  });

  
});

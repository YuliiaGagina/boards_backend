"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_errors_1 = __importDefault(require("http-errors"));
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("./config");
var errorHandler_1 = require("./middleware/errorHandler");
var logger = require("morgan");
var cors = require("cors");
var app = (0, express_1.default)();
var formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(errorHandler_1.errorHandler);
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
    .connect(config_1.DB)
    .then(function () {
    console.log("Connected to db");
    app.listen(config_1.PORT, function () {
        console.log("Listening On PORT ".concat(config_1.PORT));
    });
})
    .catch(function () {
    throw (0, http_errors_1.default)(501, "Unable to connect database");
});
var cardsRouter = require("./routes/api/cards");
var todosRouter = require("./routes/api/todos");
app.use(logger(formatsLogger));
app.use(cors());
app.use(express_1.default.json());
app.use("/api/cards", cardsRouter);
app.use("/api/todos", todosRouter);
app.use(function () {
    throw (0, http_errors_1.default)(404, "Route not found");
});
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});

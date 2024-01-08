"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpError = function (status, message) {
    var error = new Error(message);
    error.status = status;
    return error;
};
exports.default = HttpError;

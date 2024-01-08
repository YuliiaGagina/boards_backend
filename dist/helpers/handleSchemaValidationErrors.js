"use strict";
var handlehandleSchemaValidationErrors = function (error, data, next) {
    console.log("error Handler!");
    var name = error.name, code = error.code;
    if (name === "MongoServerError" && code === 11000) {
        error.status = 409;
    }
    else {
        error.status = 400;
    }
    next();
};
module.exports = handlehandleSchemaValidationErrors;

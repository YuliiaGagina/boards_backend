"use strict";
var messages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
};
var RequestError = function (status, message) {
    if (message === void 0) { message = messages[status]; }
    var error = { status: status, message: message };
    return error;
};
module.exports = RequestError;

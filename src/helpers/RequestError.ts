interface Messages {
  400: string;
  401: string;
  403: string;
  404: string;
  409: string;
}

const messages: Messages = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const RequestError = (status: keyof Messages, message: string = messages[status]): { status: keyof Messages, message: string } => {
  const error: { status: keyof Messages, message: string } = { status, message };
  return error;
};

module.exports = RequestError;

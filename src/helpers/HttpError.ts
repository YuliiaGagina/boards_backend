const HttpError = (status: number, message: string): Error=> {
  const error = new Error(message);
  (error as any).status = status;
  return error;
};

export default HttpError;
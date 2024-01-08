interface MongoServerError {
  name: string;
  code: number;
 
}
interface ExtendedMongoServerError extends MongoServerError {
  status?: number;
}

const handlehandleSchemaValidationErrors = (error: ExtendedMongoServerError, data: any, next: () => void) => {
  console.log("error Handler!");
  const { name, code } = error;
 if (name === "MongoServerError" && code === 11000) {
    error.status = 409;
  } else {
    error.status = 400;
  }
  next();
};

module.exports = handlehandleSchemaValidationErrors;


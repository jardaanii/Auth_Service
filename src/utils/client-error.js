const AppError = require("./error-handler");
const { StatusCodes } = require("http-status-codes");

class ClientError extends AppError {
  constructor(name, message, explaination, statusCode) {
    super(name, message, explaination, statusCode);
    this.explaination = explaination;
  }
}

module.exports = ClientError;

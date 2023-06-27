const customAPIError = require("./custom-error");

class unauthenticatedError extends customAPIError {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = 401;
    }
  }
  
  module.exports = unauthenticatedError;
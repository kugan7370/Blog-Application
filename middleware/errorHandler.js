// error-handler.js
module.exports = (err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging
  
    let statusCode = 500; // Internal Server Error (default)
    let message = 'Internal server error. Please try again later.';
  
    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
      statusCode = 400; // Bad Request for validation errors
      message = '';
  
      const errors = err.errors.map(error => {
        switch (error.type) {
          case 'notNull Violation':
            return `${error.path} is required.`;
          case 'unique violation':
            return `${error.path} already exists.`;
          case 'Validation error': // Handle other validation errors (customize as needed)
            return error.message;
          default:
            return error.message; // Fallback for unknown error types
        }
      });
  
      message += errors.join(', ');
    } else if (err.name === 'SequelizeDatabaseError') {
      statusCode = 400; // Bad Request for database errors (modify as needed)
      message = 'Database error occurred.';
    } else if (err.name === 'JsonWebTokenError') {
      statusCode = 401; // Unauthorized for JWT errors
      message = 'Invalid or expired authentication token.';
    } else if (err.status) { // Handle errors with predefined status codes (custom errors)
      statusCode = err.status;
      message = err.message;
    }
  
    res.status(statusCode).json({ error: message, statusCode});
  };
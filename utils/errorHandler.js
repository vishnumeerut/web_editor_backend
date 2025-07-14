const errorHandler = (err, req, res, next) => {
    console.log("Error in the application", err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      message,
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
}

module.exports = {
    errorHandler
}

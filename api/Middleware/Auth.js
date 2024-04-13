import jwt from 'jsonwebtoken';
import User from "../Models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const protect = async (req, res, next) => {
  let token = req.cookies.access_token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(errorHandler(401, 'Not authorized to access this route'));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return next(errorHandler(401, 'User not found'));
    }

    next();
  } catch (err) {
    // Token verification failed
    return next(errorHandler(401, 'Invalid or expired token'));
  }
};

// Grant access to specific roles
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(errorHandler(403, 'User not authenticated'));
    }

    if (!roles.includes(req.user.role)) {
      return next(errorHandler(403, `User role ${req.user.role} is not authorized to access this route`));
    }

    next();
  };
};
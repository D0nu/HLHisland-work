import jwt from 'jsonwebtoken';
import User from "../Models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const protect = async (req, res, next) => {
	let token

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1]
	}
	// Set token from cookie
	// else if (req.cookies.token) {
	//   token = req.cookies.token
	// }

	if (!token) {
		return next( errorHandler(401, 'Not authorized to access this route'))
	}

	try {
		// Verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		req.user = await User.findById(decoded.id)
		next()
	} catch (err) {
		return next( errorHandler(401, 'Not authorized to access this route' ))
	}
}

// Grant access to specific roles
export const authorize = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				 errorHandler(
          403, 
					`User role ${req.user.role} is not authorized to access this route`
				)
			)
		}
		next()
	}
}
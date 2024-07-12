const JWT = require("jsonwebtoken");
const SECRET_KEY = "rajeshwari20";

const auth = async (req, res, next) => {

  const authHeader = req.headers["authorization"];
  const token = authHeader;
  
  // Check if not token
  if (token == null) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    JWT.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ msg: "Token is not valid" });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;

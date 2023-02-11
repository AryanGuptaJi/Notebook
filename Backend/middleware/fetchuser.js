var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Aryanisagoodb$oy';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('authtoken');
    if (!token) {
        res.status(401).send({ error: "Please use a valid token to authenticate" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } 
    catch (error) {
        res.status(401).send({ error: "Please use a valid token to authenticate" })
    }

}


module.exports = fetchuser;
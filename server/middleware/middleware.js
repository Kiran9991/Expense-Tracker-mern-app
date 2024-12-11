const jwt = require('jsonwebtoken');
const User = require('../models/user');

const middleware = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token) {
            throw new Error('Token is missing!')
        }
        const { email } = jwt.decode(token);
        // console.log('from middle jwt token>>>',jwt.decode(token))
        const user = await User.findOne({ where:{ username: email } });
        if(!user) {
            throw new Error(`Unauthorized! or Token is Invalid!`)
        }
        req.user = user;
        // console.log(jwt.decode(token));
        next();
    }catch(error) {
        res.status(403).json({ message: `${error}`})
    }
}

module.exports = middleware;
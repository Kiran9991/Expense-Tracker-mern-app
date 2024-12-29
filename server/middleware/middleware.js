const jwt = require('jsonwebtoken');
const User = require('../models/user');

const middleware = async(req, res, next) => {
    try {
        const token = req.headers['authorization'];
        // console.log(token , '>>>>>')
        if(!token) {
            throw new Error('Token is missing!')
        }
        const user = jwt.decode(token);
        // console.log('from middle jwt token>>>',jwt.decode(token))
        const userDataObjfromdb = await User.findOne({ where:{ id: user.userId } });
        if(!userDataObjfromdb) {
            throw new Error(`Unauthorized! or Token is Invalid!`)
        }
        // console.log('>>midddleware', user)
        req.user = user;
        // console.log(jwt.decode(token));
        next();
    }catch(error) {
        res.status(403).json({ message: `${error.message}`})
        console.log(error)
    }
}

module.exports = middleware;
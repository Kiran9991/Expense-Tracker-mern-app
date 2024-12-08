const middleware = async(req, res, next) => {
    try {
        console.log(req, req.body);
        next();
    }catch(error) {
        res.status(403).json({ message: `Error: ${error}`})
    }
}

module.exports = middleware;
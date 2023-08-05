module.exports = (req,res,next) => {
// next --> when it is called when the middlewares finish hte actions...
    if(!req.user){
        return res.status(401).send({error: 'You Must Logged in!..'});
    }

    next();
};
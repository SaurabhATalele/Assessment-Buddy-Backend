const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const SecretKey = process.env.SECRET_KEY || "secret";

const authenticateToken = async (req,res,next)=>{

    const auth = req.headers['authorization']
    if(!auth){
        return res.sendStatus(401);
    }
    const data = auth.split(" ");
    const token = data[1];
    try {

        if(!token || data[0] !== "Bearer"){
            return res.sendStatus(401);
        }
        jwt.verify(token,SecretKey,(err,user)=>{
            if (err) {
                console.log(err);
                return res.sendStatus(403); // Forbidden
              }
          
              req.user = user;
              next();
        })
        
    } catch (error) {
        return res.sendStatus(500);
    }
}

module.exports = authenticateToken
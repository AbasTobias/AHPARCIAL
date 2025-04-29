import jsonwebtoken from " jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret_key = procces.env.SECRET_KEY;

const validacionToken = (res, req , next ) =>{
    const auth = req.header.autorizationL;
    if(!auth){
        res.status(401).json({msg:"No se paso el jwt"});
    }
}

export{validacionToken}
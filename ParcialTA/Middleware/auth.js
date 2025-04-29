import jsonwebtoken from " jsonwebtoken";
import dotenv from "dotenv";
import { json } from "express";

dotenv.config();
const secret_key = procces.env.SECRET_KEY;

const validacionToken = (res, req , next ) =>{
    const auth = req.header.autorizationL;
    if(!auth){
        res.status(401).json({msg:"No se paso el jwt"});
    }
}

const token = auth.split(' ')[1];

jsonwebtoken.verify(token,secret_key,(error,decoded) => {
    if (error) {
        res.status(403).json({msg:"Token Invalido"});
    }
    console.log({decoded})
    res.body.FighterId = decoded.id;
    next();
})


export{validacionToken}
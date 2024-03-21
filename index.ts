import express, { NextFunction, Request, Response } from 'express'
const app = express();
app.get("/",(req,res)=>{
    res.status(200).send("hello World");

});
app.listen(8080,()=>{
    console.log("listening to 30001");
})
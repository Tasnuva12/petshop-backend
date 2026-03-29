import {Request, Response} from "express";
export const register = async(req:Request,res:Response) =>{
    const {email,password} = req.body
    res.status(201).json({message: 'User registered'})
}
export const login =async(req:Request,res:Response) =>{
    const {email,password} = req.body
    res.status(200).json({message: 'User logged in'})
}
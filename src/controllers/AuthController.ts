import {Request, Response} from "express"
import * as authService from "../services/AuthService"
import { IUserRegister } from "../types/Auth"

export const login = async (req: Request, res: Response) => {
   try {
      const { email, password } = req.body

      const user = await authService.login(email, password)

     if (!user) {
         res.status(401).json({message: "User not found"})
     }

      res.status(200).json({
         token: user
      })
   } catch (error) {
      res.status(500).json(error)
   }
}

export const register = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const user = await authService.register(body as IUserRegister)
        
        res.json(user)

    } catch (error) {
        console.log("🚀 ~ register ~ error:", error)
        res.status(500).json({message: "Something went wrong"})
    }
}

export const checkAuth = async (req: Request, res: Response) => {
   try {
      const user = res.locals.user;

      res.json({
       email: user.email,
       fullName: user.fullName,
       gender: user.gender,
       phone: user.phone,
       addres: user.addres
      });
   } catch (error) {
      console.log(error);
      res.status(500).json(error);
   }
};
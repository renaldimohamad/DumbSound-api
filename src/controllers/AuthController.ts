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

      res.status(200).json(user)
   } catch (error) {
      res.status(500).json(error)
   }
}

export const register = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const user = await authService.register(body as IUserRegister)


        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export const checkAuth  = (req: Request, res: Response) => {
    try {
        const user = res.locals.user

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}
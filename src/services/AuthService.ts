import {User} from "@prisma/client"
import db from "../libs/db"
import {IUserRegister} from "../types/Auth"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (email: string, password: string) => {
   try {
      const existUser = await db.user.findFirst({
         where: {
            email: email,
         },
      })

      if (!existUser) {
         return "User not found"
      }

      const isMatch = await bcrypt.compare(password, existUser.password)
      
      if (!isMatch) {
         return "password is wrong"
      }

      const tokent = jwt.sign(existUser, process.env.SECRET_KEY || "secret", {
         expiresIn: "1d",
      })

      return tokent
   } catch (error) {
      throw error
   }
}

export const register = async (user: IUserRegister): Promise<User | string> => {
   try {
      const existUser = await db.user.findFirst({
         where: {
            OR: [
               {
               email: user.email,
               fullName: user.email,
            }]
         },
      })

      if (existUser) {
         return "User already exists"
      }

      const hashedPassword = await bcrypt.hash(user.password, 10)
      user.password = hashedPassword

      const newUser = await db.user.create({
         data: user,
      })

      return newUser
   } catch (error) {
      console.log("🚀 ~ register ~ error:", error)
      throw error
   }
}

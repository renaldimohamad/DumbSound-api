import express from "express"
import dotenv from "dotenv"
import route from "./src/routes"
import db from "./src/libs/db"

// initialize dotenv
dotenv.config()

const app = express()
const port = process.env.PORT || 5000 // ini nama key nya key yang kita simpan di dalam file .env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//routes
app.get("/", (req: express.Request, res: express.Response) => {
    res.send('Hello World!')
})

app.use(route)

app.listen(port, async() => {
    try {
        await db.$connect();
        console.log('Example app listening on port' + port)
    } catch (error) {
        await db.$disconnect();
        console.log(error);
    }
})
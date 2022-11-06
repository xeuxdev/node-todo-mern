import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => res.send("Hello World!"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

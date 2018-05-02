import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb://localhost/team3-api", { useMongoClient: true })

mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const Question = mongoose.model("Question", {
  name: String,
})

app.get("/", (req, res) => {
  res.send("Admin API")
})

app.post("/admin", (req, res) => {
  const admin = new Question(req.body)
  console.log("test")

  admin.save()
    .then(() => { res.status(201).send("Question created") })
    .catch(err => { res.status(400).send(err) })
})

// app.get("/products", (req, res) => {
//   Product.find().then(products => {
//
//     const obj = {products: products};
//
//     res.json(products)
//   })
// })


app.listen(8080, () => {
    console.log("Products API listening on port 8080!")
  }
)

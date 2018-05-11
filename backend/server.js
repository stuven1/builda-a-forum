import mongoose from "mongoose"//Skapar en objekthanterare som kommunicerar med databasen, Node.
import express from "express" //Framework att skriva Node.js som hjälper till med att skapa "web application server framework".
                             //Innehåller: router.
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

const Question = mongoose.model("Question", { //Här sätts mongoose objeketen.
  name: String,
  headline:String,
  content: String,
  id: String
})

const Answer = mongoose.model("Answer", {
  id: String,
  questionId: String,
  content: String
})

app.get("/", (req, res) => {
  res.send("Admin API")
})

app.post("/faq", (req, res) => {
  const question = new Question(req.body)
  console.log("test")

  question.save()
    .then(() => { res.status(201).send("Question created") })
    .catch(err => { res.status(400).send(err) })
})

app.post("/faq/:id/answers", (req, res) => {
  const answer = new Answer(req.body)
  console.log("answer")
  answer.questionId = req.params.id

  answer.save()
    .then(() => { res.status(201).send("Answer") })
    .catch(err => { res.status(400).send(err) })
})

app.get("/faq", (req, res) => {
  Question.find().then(questions => {
  res.json(questions)
  })
})


app.get("/answers", (req, res) => {
  Answer.find().then(answers => {
  res.json(answers)
  })
})

app.get("/faq/:id/answers", (req, res) => {
  Answer.find({ questionId: req.params.id }).then(answers => {
  res.json(answers)
  })
})

app.listen(8080, () => {
    console.log("Products API listening on port 8080!")
  }
)

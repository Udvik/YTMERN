const express = require('express')
const dotenv = require('dotenv')
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')
const ejs = require('ejs')




const app = express()
dotenv.config()
app.use(bodyParser.json())
app.set("view engine","ejs")

// const client = new MongoClient(process.env.MONGODB_URI)
// client.connect()
// .then(()=>{
//     console.log("Connected to mongodb Successfully")
// })
// .catch((err) => {
//     console.log("Failed to connect to mongodb")
// })

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Mongodb connected Successfully")
})
.catch((err)=>{
    console.log(err.message)
})

app.get('/hello', (req, res) => {
    res.send('Hello from my Express API')
})

app.get('/ejsPage', (req, res) => {
    const Fname = "Udvik"
    res.render('index',{name : Fname})
})

app.use('/employees',employeeRoutes)

const port = 5500
app.listen(port , ()=>{
    console.log(`Server is running at ${port}`)
})


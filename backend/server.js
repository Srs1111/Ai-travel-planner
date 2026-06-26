require("dotenv").config()
const express =require("express")

const cors =require("cors")

const connectDB = require("./config/db")

const authRoutes = require("./route/authRoutes");
const tripRoutes = require("./route/tripRoutes");



const app = express()
connectDB();


app.use(cors())
app.use(express.json())


app.use("/api/auth", authRoutes);
app.use("/api/trip", tripRoutes);

app.get("/",(req, res) => {
    res.send("Travel Planner API Running")
})
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server Running ${PORT}`)
})
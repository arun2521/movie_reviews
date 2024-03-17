require("dotenv").config({ path: "src/.env" });
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(express.json());

app.use("/api/user", authRoutes);
app.use("/api/movies",movieRoutes);
app.use("/api/movies",reviewRoutes);

const PORT = process.env.PORT || 3000;

// console.log("MongoDB URI:", process.env.MONGODB_URI);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("connected to db"))
    .catch((e)=>console.error(e))

app.listen(PORT,()=>{
    console.log("listening")
})
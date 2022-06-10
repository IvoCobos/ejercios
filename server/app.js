import 'dotenv/config';
import mongoose from "mongoose";
import user_routes from "./modules/users/user_routes.js";
import express from "express";
import students_routes from "./modules/students/students_routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

await mongoose.connect(process.env.DATABASE_URL);
app.listen(3000, () =>{
    user_routes(app);
    students_routes(app);
    console.log('express server listen on http://localhost:3000');
})
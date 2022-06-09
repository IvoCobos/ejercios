import mongoose from "mongoose";
import user_routes from "./modules/users/user_routes.js";
import express from "express";
import students_routes from "./modules/students/students_routes.js";

const app = express();

await mongoose.connect('mongodb+srv://Idukay:idu12345@cluster0.rzvvx.mongodb.net/api-rest?retryWrites=true&w=majority');
app.listen(3000, () =>{
    user_routes(app);
    students_routes(app);
    console.log('express server listen on http://localhost:3000');
})
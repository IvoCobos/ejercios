import mongoose from 'mongoose';
import model from '../core/model.js';
const {Schema, Types} = mongoose;

const studentsSchema = new Schema({
  grade: String,
  age: Number,
  user: {type: Types.ObjectId, ref: 'users'}
}, {collection: 'students', strictQuery: false});

const students = mongoose.model('students', studentsSchema);

export default model(students);

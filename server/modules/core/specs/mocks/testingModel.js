import mongoose from 'mongoose';
import model from '../../../core/model.js';

const {Schema} = mongoose;

const testingSchema = new Schema({
  name: String
}, {collection: 'testing'});

const testing = mongoose.model('testing', testingSchema);

export default model(testing);

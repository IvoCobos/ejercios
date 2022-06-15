import mongoose from 'mongoose';
import model from '../../../core/model.js';

const {Schema} = mongoose;

const testingSchema = new Schema({
  name: String,
  profile: {
    type: mongoose.Types.ObjectId,
    ref: 'testProfileCollections'
  }
}, {collection: 'testing'});

const testing = mongoose.model('testing', testingSchema);

export default model(testing);

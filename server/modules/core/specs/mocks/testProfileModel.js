import mongoose from 'mongoose';
import model from '../../../core/model.js';

const {Schema} = mongoose;

const testProfileCollectionsSchema = new Schema({
  profile: String
}, {collection: 'testProfileCollections'});

const testProfileCollections = mongoose.
model('testProfileCollections', testProfileCollectionsSchema);

export default model(testProfileCollections);

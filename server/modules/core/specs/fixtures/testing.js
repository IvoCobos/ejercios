import mongoose from "mongoose";

const id = mongoose.Types.ObjectId;

export default [
  {_id: id('620ac978d94dfb47a3bc041c'), name: 'data1', profile: id('120ac978d94dfb47a3bc041c')},
  {_id: id('620ac978d94dfb47a3bc042c'), name: 'data2', profile: id('220ac978d94dfb47a3bc041c')},
  {_id: id('620ac978d94dfb47a3bc043c'), name: 'data3'}
];

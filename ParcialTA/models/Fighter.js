import mongoose from "mongoose";

const fighterSchema = new mongoose.Schema({
  name: String,
  weight: String,
  ranking: String,
  country: String,
  record: String,
  winsByKnockout: String,
  winsBySubmission: String,
  nickname: String,
  age: String
});

const Fighter = mongoose.model("Fighter", fighterSchema);

export default Fighter;

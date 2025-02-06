import e from "express";
import mongoose from "mongoose";

const DocSchema = new mongoose.Schema({
  docId: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    default: "",
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  }
});

const Doc = mongoose.model("Doc", DocSchema);
export default Doc;
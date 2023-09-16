const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    _id: String,
    userId:{
      type:mongoose.Schema.ObjectId,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    landMark: {
      type: String, 
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    // userId:{
    //   type:mongoose.Schema.ObjectId,
    //   ref:"F-User"
    // }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Detail", Schema);

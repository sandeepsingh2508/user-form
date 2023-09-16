const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
   required:true
  },
  lastName: {
    type: String,
   required:true
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required:true,
    select:false
  },
},
{
    timestamps:true
}
);

Schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
//JWT TOKEN
Schema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECREAT, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
//compare password
Schema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("F-User", Schema);

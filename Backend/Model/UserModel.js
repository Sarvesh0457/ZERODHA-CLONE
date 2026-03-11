const {model} = require("mongoose");
const bcrypt = require("bcryptjs");
const {userSchema} = require("../Schemas/UserSchema");

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = model("User", userSchema);
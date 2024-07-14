const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Ensure bcryptjs is required correctly

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: { 
      type: String,
      default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Method to match entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // Ensure bcrypt is used correctly
};

// Middleware to hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10); // Ensure bcrypt is used correctly
  this.password = await bcrypt.hash(this.password, salt); // Ensure bcrypt is used correctly
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

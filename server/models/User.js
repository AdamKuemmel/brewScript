const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address."],
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  addresses: [
    {
      address1: {
        type: String,
        required: true,
        trim: true,
      },
      address2: {
        type: String,
        required: false,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      postal: {
        type: Number,
        required: true,
        trim: true,
      },
    },
  ],
  starter_questions: {
    coffee_prep: {
      type: String,
      required: true,
    },
    coffee_strength: {
      type: String,
      required: true,
    },
    additions: [
      {
        type: String,
        required: true,
      },
    ],
    avg_cups: {
      type: String,
      required: true,
    },
    bean_prep: {
      type: String,
      required: true,
    },
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;

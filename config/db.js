const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://prashantkumar4216_db_user:shinu123@cluster0.ohnrklb.mongodb.net/todoDB");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Connection Error:", error);
  }
};

module.exports = connectDB;


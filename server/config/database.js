const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGODB_URI =
    "mongodb+srv://himanshudhaka9166:I5eH1eqf4S9YFima@cluster1.ama8ond.mongodb.net";
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/Node-exam',{useNewUrlParser:true, useUnifiedTopology:true},function(err) {
//     if(err) throw err
//     console.log("DATABASE CONNECTED");
// })



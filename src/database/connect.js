const mongoose = require('mongoose');

const connectToDatabase = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.drsqwky.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(console.log("connection made successfully!"))
    .catch(error => {
      console.log('an error occurred while making the connection! error: ', error)
    });
};

module.exports = connectToDatabase;
import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set('strictQuery',true); //this will throw an error if you try to update a field that is not in the schema

  if(isConnected){
    console.log('Already connected to DB');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: '',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
    isConnected = true;
    console.log('Connected to DB');
  } catch (error) {
    
  }
};

export default connectToDB;
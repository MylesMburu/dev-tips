import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery',true); //this will throw an error if you try to update a field that is not in the schema

  if(isConnected){
    console.log('Already connected to DB');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: '',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
    isConnected = true;
    console.log('Connected to DB');
  } catch (error) {
    console.log('Failed to connect to DB:',error);
  }
};


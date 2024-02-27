import { connectToDB } from '@utils/database';
import Tip from '@models/Tips';


export async function GET (request) {
  
  try {
    await connectToDB()
    const tips = await Tip.find({}) // fetch all tips
    return new Response(JSON.stringify(tips),{status: 200})
  } catch (error) {
    return new Response("Failed to get tips",{status: 200})
  }
}

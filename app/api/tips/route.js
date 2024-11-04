import { connectToDB } from '@utils/database';
import Tip from '@models/Tips';


export async function GET (request) {
  
  try {
    await connectToDB()
    const tips = await Tip.find({}) // fetch all tips

    // Create a new Response object with headers to prevent caching
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    
    return new Response(JSON.stringify(tips),{status: 200})
  } catch (error) {
    return new Response("Failed to get tips",{status: 200})
  }
}

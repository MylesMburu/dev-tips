import { connectToDB } from '@utils/database';
import Tip from '@models/Tips';

export const POST = async (request) => {
    const {userID,tip, tag} = await request.json();

    try {
        await connectToDB();

        const newTip = new Tip({
            creator: userID,
            tip,
            tag
        });
    
        await newTip.save();

        console.log('Sent tip to DB');
        return new Response(JSON.stringify({message: 'Tip saved'}), {status: 201}); 
        
    } catch (error) {
        return new Response('Failed to create tip', {status: 500});
    }
};
import connectDb from '@/app/connectDb';
import { NextRequest } from 'next/server';


export async function GET(request: NextRequest, response : any): Promise<Response> {   
    try {
      const [rows] = await connectDb.query('SELECT id, skill FROM skills');
      return new Response(JSON.stringify(rows));
    } catch (error) {
        return new Response(JSON.stringify({error: true}));
    }
}

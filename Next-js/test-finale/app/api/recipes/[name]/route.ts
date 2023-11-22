import connectDb from '@/app/connectDb';
import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';


export async function GET(request: NextRequest, response : any) : Promise<Response> {
    const name = response.params.name
    console.log("sono il nome della ricetta", name);

    try {
 
        const [rows] = await connectDb.query(
            `SELECT
            recipes.id,
            recipes.name,
            recipes.preparation,
            recipes.url,
            instructions.details
          FROM
            recipes
          LEFT JOIN instructions
            ON recipes.id = instructions.id_recipes
          WHERE
            recipes.name =?`, [name],)

        
            return new Response(JSON.stringify(rows));
        } catch (error) {
            return new Response(JSON.stringify({ error: true }));
        }
}
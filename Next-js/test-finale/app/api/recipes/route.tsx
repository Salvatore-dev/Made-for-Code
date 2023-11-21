import connectDb from '@/app/connectDb';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, response: any): Promise<Response> {
    try {
        const [rows] = await connectDb.query(`
        SELECT 
        recipes.id,
        recipes.name,
        recipes.preparation,
        instructions.details AS instructions
    FROM recipes
    LEFT JOIN instructions ON recipes.id = instructions.id_recipes
      `);
        console.log(rows);

        return new Response(JSON.stringify(rows));
    } catch (error) {
        return new Response(JSON.stringify({ error: true }));
    }
}
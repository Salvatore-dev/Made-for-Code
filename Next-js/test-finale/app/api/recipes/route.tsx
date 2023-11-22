import connectDb from '@/app/connectDb';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, response: any): Promise<Response> {
    try {
        const [rows] = await connectDb.query(`
        SELECT 
        recipes.id,
        recipes.name,
        recipes.preparation,
        recipes.url,
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

export async function POST(request: NextRequest, response: any): Promise<Response> {
    const { main, ingredients, steps } = await request.json()
    //console.log("vedi skill in seever", data.skills); // questo e' un arrai di oggetti che puo essere vuoto se non ha skills, oppure sono presenti oggetti che hanno una skill {name}, un id_skill{ number}
    const { name, url, persons } = main[0]
    const preparation = {
        ingredients: ingredients,
        persons: persons
    }
    console.log('vedi in console per post', name, ingredients, persons, url);
    
    const preparationString = JSON.stringify(preparation);
    const stepsString = JSON.stringify(steps);

    console.log('vedi in console per post', stepsString, preparationString);
    try {
        const [recipeRuesult] = await connectDb.query(
            'INSERT INTO recipes (name, preparation, url) VALUES (?, ?, ?)',
            [name, preparationString, url]);

        const recipeId = recipeRuesult.insertId

        const [stepResult] = await connectDb.query(
            'INSERT INTO instructions (id_recipes, details) VALUES (?, ?)',
            [recipeId, stepsString]
        );
        console.log(stepResult);


        return new Response(JSON.stringify({ success: true, message: 'Record inserted' }));
    } catch (error) {
        return new Response(JSON.stringify({ error: true }));
    }
}
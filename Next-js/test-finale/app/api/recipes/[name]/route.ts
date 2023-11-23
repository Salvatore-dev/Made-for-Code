import connectDb from '@/app/connectDb';
import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';


export async function GET(request: NextRequest, response: any): Promise<Response> {
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




export async function PUT(request: NextRequest, response: any): Promise<Response> {
  //const name = response.params.name
  const { main, ingredients, steps, id } = await request.json();

  const { name, url, persons } = main[0];
  const preparation = {
    ingredients: ingredients,
    persons: persons,
  };

  const preparationString = JSON.stringify(preparation);
  const stepsString = JSON.stringify(steps);

  try {

    const updateRecipeQuery = `
      UPDATE recipes
      SET name = ?,
          preparation = ?,
          url = ?
      WHERE id = ?
    `;

    const updateInstructionsQuery = `
      UPDATE instructions
      SET details = ?
      WHERE id_recipes = ?
    `;

    await connectDb.query(updateRecipeQuery, [name, preparationString, url, id]);
    await connectDb.query(updateInstructionsQuery, [stepsString, id]);


    return new Response(JSON.stringify({ success: true, message: 'Record aggiornato' }));
  } catch (error) {

    return new Response(JSON.stringify({ error: true }));
  }
}


export async function DELETE(request: NextRequest, response : any) : Promise<Response> {
  const name = response.params.name
  console.log(name);

  try {


      const resp = await connectDb.query(
          'DELETE FROM recipes WHERE recipes.name=?', [name]) 
          const affectedRows = resp[0].affectedRows
          console.log("vedi qui", );
          
      
          if (affectedRows > 0) {
              return new Response(JSON.stringify({ success: true, message: 'Record deleted' }));
          } else {
              return new Response(JSON.stringify({ success: true, message: 'No record deleted' }));
          }
  } catch (error) {
      return new Response(JSON.stringify({ error: true }));
  }
}
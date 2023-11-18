"use server"
import { NextRequest, } from 'next/server';

export async function GET(request: NextRequest) : Promise<Response> {

  const response = await fetch('http://localhost:3002/categories', {
    method: 'GET',  
  });
  const data = await response.json();
  console.log("categories", data);
    
  return new Response(JSON.stringify(data))
}


import { log } from 'console';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest, response : any): Response {
  const id = response.params.id

  return new Response(JSON.stringify({message: 'ok', id: id}));
}

export async function PUT(request: NextRequest, response : any): Response {
  const id = response.params.id
  
  const fd = await request.json()

  const obj = {
    title: fd.title,
    author: fd.author,
    id: parseInt(id)
  }
    
  const data = await fetch('http://localhost:3001/posts/' + id, {
      method: 'PATCH',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(resp =>  resp.json())
    .then(data => data)

  return new Response(JSON.stringify({message: 'Post updated!', data}));
}

export async function DELETE(request: NextRequest, response : any): Response {
  const id = response.params.id
   
  const data = await fetch('http://localhost:3001/posts/' + id, {
      method: 'DELETE',
      cache: 'no-store',
    })
    .then(resp =>  resp.json())
    .then(data => data)

  return new Response(JSON.stringify({message: 'Post deleted!', id}));
}
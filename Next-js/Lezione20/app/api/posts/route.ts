import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Response {
  const data = await fetch('http://localhost:3001/posts',  { cache: 'no-store' })
    .then(resp => resp.json())
    .then(data => data)

  return new Response(JSON.stringify(data));
}

export async function POST(request: NextRequest): Response {
    const fd = await request.json()
    
    const data = await fetch('http://localhost:3001/posts', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: fd.title,
          author: fd.author
        })
      })
      .then(resp => resp.json())
      .then(data => data)

  return new Response(JSON.stringify({message: 'Post inserted!'}));
}
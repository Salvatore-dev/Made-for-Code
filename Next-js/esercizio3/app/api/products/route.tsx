"use server"
import { NextRequest, } from 'next/server';
import { revalidateTag } from 'next/cache';


export async function GET(request: NextRequest): Promise<Response> {

  const response = await fetch('http://localhost:3002/products', {
    method: 'GET',
    next: { tags: ['product'] }
  });
  const data = await response.json();
  /* console.log(data); */
  return new Response(JSON.stringify(data))
}

export async function DELETE(request: NextRequest): Promise<Response> {
  const { id } = await request.json()
  console.log(id);
  try {
    const response = await fetch('http://localhost:3002/products/' + id, {
      method: 'DELETE',
      next: { tags: ['product'] }

    })

    if (response.ok) {
      revalidateTag('product')
      return new Response(JSON.stringify({ message: 'Post deleted!', success: true, data: response }));
    } else {
      return new Response(JSON.stringify({ message: 'Post not deleted', success: false }));
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'error delete', success: false}));
  }


}

export async function PUT(request: NextRequest): Promise<Response> {
  const { id, label, description, price, category, image } = await request.json()
  console.log("sono nella put",);

  try {
    const response = await fetch('http://localhost:3002/products/' + id, {
      method: 'PUT',
      next: { tags: ['product'] },
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        label: label,
        description: description,
        price: price,
        category: category,
        image: image
      })

    })

    const data = await response.json()

    if (response.ok) {
      revalidateTag('product')
      return new Response(JSON.stringify({ message: 'Product deleted!', success: true}));
    } else {
      return new Response(JSON.stringify({ message: 'Product not deleted', success: false }));
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'error delete', success: false }));
  }
}

export async function POST(request: NextRequest): Promise<Response> {
  const {label, description, price, image } = await request.json()

  //const r = await request.json()
  console.log("sono nella post");

  try {
    const response = await fetch('http://localhost:3002/products', {
      method: 'POST',
      next: { tags: ['product'] },
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        label: label,
        description: description,
        price: price,
        image: image
      })

    })

    const data = await response.json()

    if (response.ok) {
      revalidateTag('product')
      return new Response(JSON.stringify({ message: 'Product deleted!', success: true}));
    } else {
      return new Response(JSON.stringify({ message: 'Product not deleted', success: false }));
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'error delete', success: false }));
  }
}

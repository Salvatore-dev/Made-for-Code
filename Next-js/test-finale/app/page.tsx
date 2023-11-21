"use client"

import { useEffect, useState } from 'react'
import { Recipes_type } from './lib/definitions'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

   const [data, setData] = useState<Recipes_type[]>([])
useEffect(()=>{

  async function getRecipes() {
    const recipes = await fetch('/api/recipes', {
      method: 'GET',
    })
    .then(recipes=> recipes.json())

    console.log(recipes);
    setData(recipes)
  }

  getRecipes()
}, [])

  return (
    <main>
     ciao
     <Link href={`/dashboard`}>dashboard</Link>
    </main>
  )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
    return (
<header className="bg-white dark:bg-gray-900 py-8">
  <div className="container mx-auto flex items-center justify-between">
    <div className="w-1/3">
      <img src="https://i.pinimg.com/736x/ac/7f/0e/ac7f0e0b31a10af27a76ba8d05c39e3d.jpg" className="w-full rounded-lg" alt="Logo" />
    </div>
    <div className="w-2/3 pl-8">
      <h1 className="text-gray-100 text-3xl md:text-5xl font-extrabold mb-4">Ricette antiche e nuove</h1>
      {/* Aggiungi eventuali altri elementi qui, come descrizione o pulsanti */}
      
    </div>
  </div>
</header>
    )
}

export default Header
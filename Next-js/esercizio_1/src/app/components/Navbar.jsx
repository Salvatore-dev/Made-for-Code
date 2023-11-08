import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <ul className='flex gap-3 p-5 justify-center'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/users'>Users</Link></li>
            <li><Link href='/users/m'>M Users</Link></li>
            <li><Link href='/users/f'>F Users</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { users } from '../data/data'
import Link from 'next/link'
import { slugify } from '../data/helper'

function Users() {

  return (
    <>
      <div>
        <h1>Tutti gli Utenti</h1>


        {users.map(el => (
          <div key={el.id} className='p-3 bg-gray-200 w-40 m-3'>
            <p>{el.fullname}</p>
            <p>{el.id}</p>
            <Link href={'users/' + slugify(el.gender)}>
              <p className={el.gender === 'Male' ? ' bg-blue-400' : 'bg-pink-300'}>{el.gender}</p>
            </Link>
          </div>
        ))}

      </div>
    </>
  )
}

export default Users
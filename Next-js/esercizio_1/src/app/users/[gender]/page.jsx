import React from 'react'
import { users } from '@/app/data/data'
import { slugify } from '@/app/data/helper'

function Gender({params}) {
  return (
    <div>
        {
            users.filter(el => (slugify(el.gender) === params.gender)).map(el => (
                <div key={el.id} className={`p-3 w-40 m-3 ${el.gender === 'Male' ? ' bg-blue-400 ' : 'bg-pink-300'}`}>
                  <p>{el.fullname}</p>
                  <p>{el.id}</p>
                
                </div>
              ))
        }
    </div>
  )
}

export default Gender
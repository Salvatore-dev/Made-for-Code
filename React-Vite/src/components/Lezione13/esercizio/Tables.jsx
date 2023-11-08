import React, { useContext } from 'react'
import Table from './Table'

import Es_02_11_23Context from './EsContext'

function Tables() {
    
   const {tables, setTables} = useContext(Es_02_11_23Context)

  return (
    
    <div className=' col-span-9 '>
        <div className='flex gap-9 flex-wrap justify-center my-9'>
     {tables.map(el => (
        <div key={el.id} className='col-span-4 p-5 border border-gray-700  bg-slate-200'>
        <Table element={el} />
        </div>
     ))}
        </div>
    </div>
  )
}

export default Tables
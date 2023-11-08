import React, { useContext, useState } from 'react'
import Es_02_11_23Context from './EsContext'

function Sidebar() {

    const {tables} = useContext(Es_02_11_23Context)
    


  return (
    <section className=' col-span-3 bg-slate-300'>
        <div>free tables: {tables.filter(el => (el.reserved === false)).length}</div>
        <div>booked tables: {tables.filter(el => (el.reserved === true)).length}</div>
        <div>people: {tables.reduce((acc, el) => {
            return acc + parseInt(el.numberOfPeople)
        },0)}</div>
    </section>
  )
}

export default Sidebar
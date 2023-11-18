"use client"


import { useEffect, useState, useRef } from 'react'

import AddStudent from './components/addStudent'
interface FormData {
  firstname: string;
  lastname: string;
  avg: number;
  id : number,
  skills : string | null
}
export default function Home() {
  
  const [data, setData] = useState<FormData[]>([{firstname: '', lastname: '', avg: 0, id:0, skills: null}])
  const [reload, setReload] = useState<boolean>(false)
  useEffect(() => {

    async function getData() {
      const response = await fetch('api/students')
      const data = await response.json()
      setData(data)
    }
    getData()
  }, [reload])

  console.log(" vedi data", data);


  async function deleteItems(id:number) {
    const response = await fetch(`api/students/${id}`, {
      method: 'DELETE',
    })
    
    const r = await response.json()
    console.log(r);
    if (r.success) {
      setReload(prev=>!prev)
    }
    
    
  }
  return (
    <>
    <section>
      <h1 className="text-center text-4xl font-bold">Aggiungi studente</h1>
      <AddStudent setReload={setReload} />
    </section>
      <section>
        <h1 className="text-center text-4xl font-bold">Students</h1>
        {data.map(el=>(
          <div key={el.id} className={`flex flex-row items-center gap-2 px-5 py-3`}>Lo studente {el.firstname} {el.lastname} ha come come media voti {el.avg}. {el.skills && `Inoltre le sue competenze riguardano: ${el.skills} `}
          <button onClick={()=> deleteItems(el.id)} className=' font-bold p-1 bg-slate-300 border rounded-lg text-red-800' >Elimina</button>
          </div>
        ))}
      </section>
    </>
  )
}

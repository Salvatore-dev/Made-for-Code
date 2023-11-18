"use client"

import React, { useState } from 'react'
import{useRef, useEffect} from "react"

interface FormData {
  firstname: string;
  lastname: string;
  avg: number;
  skills : Skill_Student[] | []
}

interface Skill {
  id: number;
  skill: string
}
interface Skill_Student {
  skill: string,
  id_skill: number
  value: boolean
}

type MyReload = React.Dispatch<React.SetStateAction<boolean>>;

function AddStudent({setReload} : {setReload : MyReload}) {
  const formRef = useRef<HTMLFormElement>(null);
    const [skills, setSkills] = useState<Skill[]>([])

  useEffect(()=>{
    async function getSkills() {
      
      const response = await fetch("api/skills")
      .then(res => res.json())

      console.log("reaponse",response);
      setSkills(response)
    }

    getSkills()


  }, [])


    async function sendData(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Impedisce il comportamento predefinito del form (aggiornamento della pagina)

    // Ottieni i valori dei campi del form
    const firstname = e.currentTarget.elements.firstname.value;
    const lastname = e.target.elements.lastname.value;
    const avg = parseFloat(e.target.elements.avg.value);
    
    const skills_student : Skill_Student[] = skills.map(el=> { // mappo gli elementi
      return { //ritorno un array di oggetti per ogni elemento skills
        skill: el.skill, //il nome della skill
        id_skill: el.id, // il suo id mi serve poi nel server
        value : e.target.elements[el.skill].checked // vedo il risultato del checked nell'imput true || false
      }
    }).filter(el=> el.value === true) // filtro solo le spunte true
console.log("vedi le skills", skills_student);
  

    // Crea un oggetto con i dati del form
    const formData :FormData = {
      firstname: firstname,
      lastname: lastname,
      avg: avg,
      skills: skills_student
    };

    const send = await fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indica che stai inviando dati JSON
      },
      body: JSON.stringify(formData), // Converte l'oggetto in una stringa JSON
    });

    if (send.ok) {
      setReload(prev => !prev)
      formRef.current?.reset();
      console.log('Studente aggiunto con successo!');
    } else {
      console.error('Errore durante l\'aggiunta dello studente.');
    }
}
  return (
    <div className=' bg-slate-700'>
        <form ref={formRef} onSubmit={sendData} method='POST' className='my-2 p-1 flex flex-col justify-between gap-3 '>
          <div className='flex flex-row justify-between items-center gap-2'>
            <label className='text-white text-xl font-medium' htmlFor="firstname"> firstname: 
                <input className=' bg-slate-200 h-8 p-1 text-base ml-2 border-black text-black' type='text' id='firstname' name='firstname' required></input>
            </label>
            <label className='text-white text-xl font-medium' htmlFor='lastname'>
                lastname:
                <input className=' bg-slate-200 h-8 p-1 text-base ml-2 border-black text-black' type='text' id='lastname' name='lastname' required></input>
            </label>
            <label className='text-white text-xl font-medium' htmlFor='avg'>
                avg: 
                <input className=' bg-slate-200 h-8 p-1 text-base ml-2 border-black text-black' type='number' step={0.1} min={3} max={10} id='avg' name='avg' required></input>
            </label>
            <button className=' bg-green-200 border-red-400 rounded-lg p-2 text-black' type='submit'>add</button>
          </div>
            
            <div className='flex flex-row  items-center justify-around gap-2'>
              {skills.map(el => (
                <label key={el.skill} htmlFor={el.skill} className='text-white flex items-center'>
                  {el.skill}: 
                  <input className='h-5 w-5' type="checkbox"  id={el.skill} name={el.skill}/>
                </label>
                
              ))}
            </div>
        </form>

    </div>
  )
}

export default AddStudent
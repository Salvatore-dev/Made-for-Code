import React from 'react'
import { useState } from 'react'

function Insert({posts, setPosts, authors}) {

const [input, setInput] = useState({title:'', text:'', author:''})
const [completed, setCompleted] = useState({filled: false, completed: false})

const handleChange = (e) => {
  setInput(prev => ({...prev, [e.target.name]: e.target.value}))

}

const handleClick = (e) => {
  e.preventDefault()
  if(setInput.title !== "" && setInput.text !== "" && setInput.author !== ''){
      setPosts(prev => ([...prev, input]))
      setInput({title:'', text:'', author:''})
      setCompleted(prev => ({...prev, completed: true}))
      setTimeout(() => {
          setCompleted(prev => ({...prev, completed: false}))
      }, 2000);
  }

  console.log(input);
}


  return (
    <section>
      <h2 className=' font-bold text-lg '>insert post</h2>
      <div className=' flex flex-col'>
        <label>Title: <input name='title' onChange={handleChange} className=' border' placeholder='Title' type="text" /></label>
        <label>Text: <textarea name='text' onChange={handleChange} placeholder='Text' /></label>
        <label>Author: <select name='author' onChange={handleChange} id="">
            
           {authors.map(el => (
        <option key={el.id} value={el.name}>{el.name}</option>
           ))}
            
        </select>
        </label>
      </div>
      <button className='py-2 px-3 bg-cyan-500 hover:bg-cyan-600 text-sm font-semibold rounded-md shadow focus:outline-none' onClick={handleClick}>Add</button>
      <div className={completed.completed ? '' : 'hidden'}>Completed</div>
    </section>
  )
}

export default Insert
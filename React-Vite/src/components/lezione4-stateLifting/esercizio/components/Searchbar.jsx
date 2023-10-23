import React, { useState } from 'react'

function Searchbar()  {

    const [value, setValue] = useState('')
    
    const handleChange = (e) =>{
        setValue(e.target.value)
    }


  return (
    <div>
        <input type="text"
        placeholder='cerca...' 
        value={value}
        onChange={handleChange}/>
    </div>
  )
}

export default Searchbar
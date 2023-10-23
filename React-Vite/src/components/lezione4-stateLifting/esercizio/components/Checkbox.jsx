import React from 'react'

function Checkbox({users, selector}) {

  return (
    <div>
      <fieldset className="border-gray-300 rounded-md p-4">
        <legend className="text-lg font-semibold">Visualizza per autore:</legend>

        {
          users.map(users => (
            <div className="my-2 mx-4">
            <label className="inline-flex items-center">
              <input key={users.id} type="checkbox" name={users.name} checked={users.checked} onChange={selector} className="form-checkbox  bg-blue-500 w-6 h-6 border-gray-300 shadow-sm" />
              <span className="text-gray-700 font-medium ml-3">{users.name}</span>
            </label>
          </div>
          ))
        }


      </fieldset>
    </div>

  )
}


export default Checkbox
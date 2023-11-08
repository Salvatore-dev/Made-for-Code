import React, { useContext, useReducer, useState } from 'react'
import Es_02_11_23Context from './EsContext'
import { memo } from 'react'

function Table({ element }) {

    const { setTables, tables } = useContext(Es_02_11_23Context)

    const [cardStatus, setCardStatus] = useState(false)
    const [input, setInput] = useReducer((state, action) => {
        switch (action.type) {
            case 'name':
                return {
                    ...state,
                    reservationName: action.e.target.value
                }
            case 'time':
                return {
                    ...state,
                    reservationTime: action.e.target.value
                }
            case 'people':
                return {
                    ...state,
                    numberOfPeople: action.e.target.value
                }

        }
    }, { id: element.id, reserved: true, numberOfPeople: 0, reservationName: '', reservationTime: '' })


    const clickHandle = () => {
        setTables(prev => prev.map(el => {
            if (el.id === element.id) {
                return input
            }
            return el
        }))
    }
console.log(input)
    return (
        <div className=' cursor-pointer'>
{!element.reserved ? (
            <>
                <button className='border bg-emerald-500 p-3 rounded-full  ' onClick={() => setCardStatus(prev => !prev)}>Book table N. {element.id}</button>
                {cardStatus === true &&
                    <div className='flex flex-col gap-3 justify-center items-center'  >
                        <label htmlFor="name">Name:
                            <input value={input.reservationName} onChange={(e) => setInput({ type: 'name', e })} className=' h-10 text-xl border border-gray-700' id='name' type="text" />
                        </label>
                        <label htmlFor="appt-time">Choose an appointment time:
                            <input onChange={(e) => setInput({ type: 'time', e })} className=' h-10 text-xl border border-gray-700' id="appt-time" type="time" name="appt-time" value={input.reservationTime} />
                        </label>

                        <label htmlFor="guests">How many of you?
                            <input value={input.numberOfPeople} onChange={(e) => setInput({ type: 'people', e })} id='guests' className=' border border-gray-700 w-10 h-10 text-xl' type='number' min='1' max='10' />
                        </label>
                        <button onClick={clickHandle}>send</button>
                    </div>}
            </>
 ):(
<div className='bg-red-400'>
    table {element.id} reserved
</div>
 )}

        </div>
    )
}

export default memo(Table)
"use client"

import Link from "next/link"
import MyButton from "./components/myButton"
import { useState } from "react"

import MyList from "./components/mylist"


const cities = [
    { name: 'Tokyo', country: 'Japan', population: 37400068 },
    { name: 'Delhi', country: 'India', population: 30290936 },
    { name: 'Shanghai', country: 'China', population: 27058479 },
    { name: 'São Paulo', country: 'Brazil', population: 22043028 },
    { name: 'Mumbai', country: 'India', population: 19513597 },
    { name: 'Istanbul', country: 'Turkey', population: 15469504 },
    { name: 'Lahore', country: 'Pakistan', population: 13598115 },
    { name: 'Moscow', country: 'Russia', population: 12500123 },
    { name: 'Bangalore', country: 'India', population: 11710282 },
    { name: 'Kinshasa', country: 'Democratic Republic of the Congo', population: 11585504 },
    { name: 'London', country: 'United Kingdom', population: 8982256 },
    { name: 'Lima', country: 'Peru', population: 8693387 },
    { name: 'New York City', country: 'United States', population: 8175133 },
    { name: 'Bangkok', country: 'Thailand', population: 8170175 },
    { name: 'Lagos', country: 'Nigeria', population: 15938000 },
    { name: 'Bogotá', country: 'Colombia', population: 7173030 },
    { name: 'Cairo', country: 'Egypt', population: 9813807 },
    { name: 'Chennai', country: 'India', population: 7443958 },
    { name: 'Los Angeles', country: 'United States', population: 12514539 },
    { name: 'Berlin', country: 'Germany', population: 3520031 },
  ];
function MyPage() {

    const [counter, setCounter] = useState<number>(0)
    return (
        <section>
        <Link href="/" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Torna alla Home
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </Link>

      <div>
        <MyButton title="contatore" disabled={false} funx={setCounter} />
        <div>Counter: {counter}</div>
      </div>
      <ul>
        {cities.map(el=> (
            <li key={el.name + - + el.country} className="grid grid-cols-12 justify-between gap-1">
                <MyList name={el.name} country={el.country} population={el.population}></MyList>
            </li>
        ))}
      </ul>
        </section>
    )
}

export default MyPage
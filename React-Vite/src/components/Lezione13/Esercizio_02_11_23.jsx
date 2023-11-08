import React, { createContext, useReducer, useState } from "react";
import Es_02_11_23Context from "./esercizio/EsContext";
import Sidebar from "./esercizio/Sidebar";
import Tables from "./esercizio/Tables";


function Es_02_11_23() {
  const [tables, setTables] = useState([
    {
      id: 1,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 2,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 3,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 4,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 5,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 6,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 7,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 8,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 9,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 10,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 11,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 12,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 13,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 14,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 15,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 16,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 17,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 18,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 19,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
    {
      id: 20,
      reserved: false,
      numberOfPeople: 0,
      reservationName: null,
      reservationTime: null,
    },
  ]);
  return (
    <Es_02_11_23Context.Provider value={{ tables, setTables }}>
      <main className="grid grid-cols-12">
        <Sidebar />
        <Tables />
      </main>
    </Es_02_11_23Context.Provider>
  );
}

export default Es_02_11_23;

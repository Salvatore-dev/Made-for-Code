import { useCallback, useMemo, useReducer } from "react";
import Panel from "./components/Panel";
import Es_3_11_context from "./components/Es_3_11_context";

function getData() {
  const numberOfPeople = 50;
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "z",
  ];

  function getRandomInt(max, min = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //console.log(getRandomInt(numberOfPeople));

  function choiseEl(el1, el2, funxRandom, el3 = null) {
    let tot = [];
    if (el3) {
      tot = [el1, el2, el3];
    } else {
      tot = [el1, el2];
    }

    let randomIndex = funxRandom(tot.length - 1, 0);

    return tot[randomIndex];
  }

  let people = [];

  for (let i = 1; i <= numberOfPeople; i++) {
    let name = choiseEl(
      consonants[getRandomInt(consonants.length - 1, 0)],
      vowels[getRandomInt(vowels.length - 1, 0)],
      getRandomInt
    );
    let limitName = getRandomInt(7, 3);
    for (let j = 0; j < limitName; j++) {
      if (consonants.includes(name[name.length - 1])) {
        const vowel = vowels[getRandomInt(vowels.length - 1, 0)];
        name += vowel;
      } else {
        const consonant = consonants[getRandomInt(consonants.length - 1, 0)];
        name += consonant;
      }

      //name += consonant + vowel
    }
    people.push(name);
  }
  //console.log(people);

  const choiseGender = () => choiseEl("M", "F", getRandomInt);
  //console.log("vedi ora", choiseGender() );

  function getMediaVotes() {
    let votes = [];
    for (let i = 1; i <= 7; i++) {
      const vote = getRandomInt(10, 3);
      votes.push(vote);
    }
    return Math.floor(
      votes.reduce((tot, vote) => {
        return tot + vote;
      }, 0) / votes.length
    );
  }
  // console.log(getMediaVotes());

  const result = people.map((el) => {
    return {
      name: el,
      gender: choiseGender(),
      media_votes: getMediaVotes(),
    };
  });

  console.log("vedi solo qui", result);
  return result;
}

export default function ES_3_11(params) {

  // const Mydata= useCallback(()=>getData(),[])
  const People = useMemo(()=> getData(),[])

  const [input, setInput] = useReducer((state, action)=>{
    console.log('soo nel reducer');
    switch (action.type) {
      case "radio":
        console.log("reducer_radio", action.case);
      return{...state};
    }
  }, People)
  return (
    <Es_3_11_context.Provider value={{input, setInput}}>
      <div className="bg-gray-200 flex  justify-center">
        <h1 className="text-center p-2 text-2xl text-blue-900 font-bold">
          Esercizio 3 novembre
        </h1>
      </div>
      <div>
        <Panel />
      </div>
      <div>
        <div className="bg- bg-blue-500 text-center font-medium text-white">
          Lista Studenti
        </div>
        <ul>
          {People &&
            People.map((P, i) => (
              <li
                key={`Students: ${P.name}; ${i}`}
                className={`bg-blue-${i % 2 === 0 ? "100" : "200"} grid grid-cols-12 justify-center items-center gap-3`}
              >
                <p className="col-span-4"> Studente: <span className="text-md font-semibold">{P.name}</span></p>
                <p className="col-span-4">di sesso: <span className="text-md font-semibold">{P.gender}</span> </p>
                <p className="col-span-4">ha la media voti:{" "} <span className="text-md font-semibold">{P.media_votes}</span>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </Es_3_11_context.Provider>
  );
}

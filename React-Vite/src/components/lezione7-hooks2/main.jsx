import { useReducer } from "react";


function changeColor(value) {
  // Calcola la proporzione
  const proportion = (value - 1) / (500 - 1);
  
  // Mappa la proporzione al nuovo intervallo
  const mappedValue = (proportion * (255 - 1)) + 1;
  
  // Arrotonda il risultato a un numero intero
  return Math.round(mappedValue);
}



export default function Esercio7(params) {

  const [configDiv, setConfigDiv] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "width":
          console.log("width", action.type, "change color", changeColor(action.e.target.value) );
          return {...state, width: action.e.target.value};
        case "height":
          console.log("height", action.type, "value", action.e.target.value);
          return {...state, height: action.e.target.value};
        case "colors":
          console.log("color", action.type, "value", action.e.target.value);
          return {...state, color: action.e.target.value};
      }
    },
    {
      width: 100,
      height: 100,
      color: "rgb(201, 97, 126)",
    }
  );

  return (
    <>
      <div className="grid grid-cols-12 gap-2 m-2">
        <div className="col-span-4 flex flex-col justify-center">
          <label className="mr2" htmlFor="width">
            Width (between 10 and 500):
          </label>
          <input
            onChange={(e) =>
              setConfigDiv({
                type: "width",
                e,
              })
            }
            className="h-2 w-28"
            type="range"
            id="width"
            name="width"
            min="10"
            max="500"
          />
        </div>

        <div className="col-span-4 flex flex-col justify-center">
          <label htmlFor="height">height (between 10 and 500):</label>
          <input
            onChange={(e) =>
              setConfigDiv({
                type: "height",
                e,
              })
            }
            className="h-2 w-28"
            type="range"
            id="height"
            name="height"
            min="10"
            max="500"
          />
        </div>

        <div className="col-span-2" >
          <label htmlFor="colors">Choose a color:</label>
          <select
            onChange={(e) =>
              setConfigDiv({
                type:"colors",
                e,
              })
            }
            name="colors"
            id="colors"
          >
            <option value="red">Rosso</option>
            <option value="green">Verde</option>
            <option value="pink">Rosa</option>
            <option value="blue">Blu</option>
          </select>
        </div>
        <div className="col-span-2 flex flex-row gap-2 items-center">
          <input type="checkbox" name="ratio"/>
          <label htmlFor="ratio" >Apply the ratio</label>
        </div>
      </div>

      <div
      className="ml-40 mt-7"
        style={{
          width: configDiv?.width + "px",
          height: configDiv?.height + "px",
          backgroundColor: configDiv?.color,
        }}
      ></div>
    </>
  );
}

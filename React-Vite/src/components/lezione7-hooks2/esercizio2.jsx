import { useReducer } from "react"

function App() {

  const [input, setInput] = useReducer((state, action) => {
    switch (action.type) {
      case 'width':
        return {
          height: state.height,
          width: action.e.target.value * state.ratio,
          color: state.color,
          ratio: state.ratio
        };
      case 'height':
        return {
          width: state.width * state.ratio,
          height: action.e.target.value,
          color: state.color,
          ratio: state.ratio

        };
      case 'color':
        return {
          width: state.width * state.ratio,
          height: state.height,
          color: action.e.target.value,
          ratio: state.ratio
        }
      case 'ratioChecked':
        return {
          width: state.width * 2,
          height: state.height,
          color: state.color,
          ratio: 2
        }
      case 'ratioUnchecked':
        return {
          width: state.width,
          height: state.height,
          color: state.color,
          ratio: 1
        }
    }
  }, { height: 100, width: 100, color: 'blue', ratio: 1 })

  const checkHandle = (e) =>{
    if(e.target.checked){
      setInput({ type: 'ratioChecked'})
    }
    else if(!e.target.checked){
      setInput({ type: 'ratioUnchecked' })
    }
  }

  return (
    <main>
      <h1>Set Rectangle</h1>
      <div>
        <input type="range" min="100" max="500" value={input.width} id="width" onChange={(e) => setInput({ type: 'width', e })} />
        <input type="range" min="100" max="500" value={input.height} id="height" onChange={(e) => setInput({ type: 'height', e })} />
        <select name="color" id="color" onChange={(e) => setInput({ type: 'color', e })}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <label htmlFor="subscribe">
        <input
          type="checkbox"
          onChange={(e)=>checkHandle(e)}
        />
       Ratio 1:2
      </label>
      </div>
      <div style={{ width: input.width + 'px', height: input.height + 'px', 'background-color': input.color }} >
        rectangle
      </div>
    </main>
  )
}

export default App
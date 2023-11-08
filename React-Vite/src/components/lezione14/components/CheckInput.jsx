

function CheckInput() {
    
    return(
        <div className="flex flex-row items-center text-xl font-medium">
        Seleziona per sesso: 
        <label className="flex flex-row items-center ml-3">
          M:
          <input className="ml-1 w-5 h-5" type="checkbox"></input>
        </label>
        <label className="flex flex-row items-center ml-5">
          F:
          <input className="ml-1 w-5 h-5" type="checkbox"></input>
        </label>
      </div>
    )
}

export default CheckInput
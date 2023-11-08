
function TextInput(p) {
    return (
        <div className="flex flex-row gap-3">
        <label className="text-xl font-medium ">
          Search
          <input className="bg-blue-100 text-l text-center font-medium ml-2" type="text" placeholder="Seleziona il nome"></input>
        </label>
      </div>
    )
}

export default TextInput
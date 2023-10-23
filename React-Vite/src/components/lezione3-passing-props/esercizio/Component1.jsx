import { useState, useEffect } from "react"

const ElementListInput = ({title}) => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [totList, setTotList] = useState(0)
    const [todoList, setTodoList] = useState(0)
    const [doneList, setDoneList] = useState(0)

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        if (input.trim() === "") return;
        setList(prev => [...prev, { value: input, completed: false }]);
        setInput("");
    }

    const handleDelete = (index) => {
        setList(prev => prev.filter((item, i) => i !== index));
    }

    const handleToggle = (index) => {
        setList(prev => prev.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    completed: !item.completed
                }
            } else {
                return item;
            }
        }));
    }

    useEffect(()=> {
        setTotList(list.length)
        let todoCount = 0
        let doneCount = 0

        list.forEach((el)=> {
            !el.completed && todoCount++
            el.completed && doneCount++
        })
        setTodoList(todoCount)
        setDoneList(doneCount)

    }, [list])


    return (
        <div className="flex flex-col items-center m-4 p-2 border border-blue-800 border-4"  >
            <div>
                <h1 className="text-center font-bold text-2xl">{title}</h1>
            </div>

            <div className="">
                <input type="text" placeholder="Search" value={input} onChange={handleInputChange}></input>
                <button className="border border-2 rounded-full px-2" onClick={handleSubmit}>+</button>
            </div>

            <div className="grid grid-cols-12 mt-14">
                <ul className="col-span-8">
                    {list.map((item, index) => {
                        return (
                            <li key={index} className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2" onChange={() => handleToggle(index)} />
                                    <span className={"text-gray-600 " + (item.completed && "line-through")}>{item.value}</span>
                                </div>
                                <button className="bg-red-500 text-white px-2 rounded-full mr-2"
                                    onClick={() => handleDelete(index)}>
                                    x
                                </button>
                            </li>
                        )
                    }
                    )}
                </ul>


                <ul className="col-span-4 border-l-2 border-l-gray-600 pl-4">
                    <li>{`La lista e' composta da ${totList} elementi`}</li>
                    <li>{`Ci sono ancora ${todoList} cose da fare`}</li>
                    <li>{`Ci sono ${doneList} cose gia' fatte`}</li>
                </ul>
            </div>

        </div>
    )
}

export default ElementListInput;
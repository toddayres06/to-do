import React, {useState} from 'react'

const ListItems = () => {
const [todos, setTodos] = useState(["a", "b", "c"])
const [inputValue, setInputValue] = useState("")

const handleInputChange = (event) => {
    setInputValue(event.target.value)
}

const handleButtonClick = () => {
    if (inputValue !== "") {
        setTodos([...todos, inputValue])
        setInputValue("")
    }
}

const handleRemoveItem = (index) => {
    const newItems = todos.filter((_, i) => i !== index)
    setTodos(newItems)
}

const handleClearAll = () => {
    setTodos([])
}

    return (
        <>
            <div className="to-do-container">
                <div className="input-section">
                    <input type="text" 
                           value={inputValue}
                           placeholder="Get Mail"
                           onChange={handleInputChange} 
                        />
                    <button className="btn add" onClick={handleButtonClick}>Add to list</button>
                </div>
                <ul>
                    <div className="list">
                    {todos.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                            <button className="remove btn" onClick={() => handleRemoveItem(index)}>Remove</button>
                            </li>
                            )
                        })}
                    </div>
                </ul>
                <footer>
                    <button className="btn" type="btn" onClick={handleClearAll}>Clear list</button>
                </footer>
            </div>
        </>

    )
}

export default ListItems
import React, {useState, useEffect, useRef} from "react"
// import uuidv4 from 'uuid/v4'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault() // So you can't submit a empty form
        props.onSubmit({
            id: Math.floor(Math.random()*99999),
            // id: uuid(),
            text: input
        })
        
        setInput("") //Clears the text area after writing
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? 
            (
                <>
                <input
                type="text" 
                placeholder="Update todo" 
                value={input}
                name="text" 
                className="todo-input-edit"
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-btn-edit">Update</button>
                </>
            ) : 
            (
                <>
                <div className="create-div">
                    <input
                    type="text" 
                    placeholder="Add a todo" 
                    value={input}
                    name="text" 
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="todo-btn">New Task</button>
                    <button className="clear-complete-btn">Clear Complete</button>
                </div>
                </>
            )}
            
        </form>
    )
}

export default TodoForm

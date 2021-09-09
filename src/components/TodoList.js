import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        //So spaces ans stuff wont be added to the task
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos] //Spread function = ...
        setTodos(newTodos)
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const editTodo = (id, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev => prev.map(i =>(i.id === id ? newValue : i)))
    }

    const completeTodo = id => {
        let editTodos = todos.map(todo => {
            if(todo.id == id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(editTodos)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
             />
        </div>
    )
}

export default TodoList

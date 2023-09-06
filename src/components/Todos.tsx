import { useState } from "react"
import TodoItem from "./TodoItem";
import { useFetchTodoItemQuery, useAddTodoItemMutation, useDeleteTodoItemMutation } from "../store/api/todoApi";
import Todo from "../store/models/todo";

const Todos = () => {
    const { data } = useFetchTodoItemQuery(null)
    const [addTodoItem] = useAddTodoItemMutation()
    const [deleteTodoItem] = useDeleteTodoItemMutation()


    const [inputText, setInputText] = useState<string>("");


    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        addTodoItem(new Todo(inputText))
        setInputText("")
    }

    function deleteItem(id: string) {
        // deleteTodoItem(id);
    }

    return (<>
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" value={inputText} />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {data?.map((todoItem: { id: string, text: string }, index: string) => (
                        <TodoItem
                            key={index}
                            id={todoItem.id}
                            type={todoItem.text}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>

    </>)
}

export default Todos
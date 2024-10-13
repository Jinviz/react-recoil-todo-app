import React, {useState} from 'react';
import {useSetRecoilState} from "recoil";

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            }
        ])
    }

    return(
        <div>
            <input type="text" value={inputValue} onChange={}/>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

let id = 0;
function getId() {
    return id++;
}

export default TodoItemCreator
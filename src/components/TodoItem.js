import React from 'react';
import {useRecoilState} from "recoil";

const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({ target: {value} }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        })
    }

    return(
        <div>
            <input type='text' value={item.text} onChange={editItemText} />
        </div>
    )
}

export default TodoItem

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arrslice(index + 1)]
}
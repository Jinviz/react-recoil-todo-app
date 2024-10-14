import logo from './logo.svg';
import './App.css';
import React from 'react';
import {atom, useRecoilValue} from "recoil";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoItem from "./components/TodoItem";
import {filteredTodoListState, todoListFilterState, todoListState} from "./todoAtoms";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";
import CurrentUserInfo from "./components/CurrentUserInfo";

function App() {
  // const todoList = useRecoilValue(todoListState); // 필터가 안된 state
  const todoList = useRecoilValue(filteredTodoListState); // 필터된 state

  return (
    <div className="App">
        <React.Suspense fallback={<div>...loading</div>}>
            <CurrentUserInfo/>
        </React.Suspense>
        <TodoListStats/>
        <TodoListFilters/>
        <TodoItemCreator />
        {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
            </div>
  );
}

export default App;



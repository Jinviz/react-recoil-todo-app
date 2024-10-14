import logo from './logo.svg';
import './App.css';
import {atom, useRecoilValue} from "recoil";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoItem from "./components/TodoItem";
import {filteredTodoListState, todoListFilterState, todoListState} from "./todoAtoms";
import TodoListFilters from "./components/TodoListFilters";

function App() {
  // const todoList = useRecoilValue(todoListState); // 필터가 안된 state
  const todoList = useRecoilValue(filteredTodoListState); // 필터된 state

  return (
    <div className="App">
        <TodoListFilters/>
        <TodoItemCreator />
        {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
            </div>
  );
}

export default App;

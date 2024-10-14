import logo from './logo.svg';
import './App.css';
import {atom, useRecoilValue} from "recoil";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoItem from "./components/TodoItem";
import {todoListState} from "./todoAtoms";

function App() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="App">
      <TodoItemCreator />
      {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
    </div>
  );
}

export default App;

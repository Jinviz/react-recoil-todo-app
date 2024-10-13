import logo from './logo.svg';
import './App.css';
import {atom} from "recoil";
import TodoItemCreator from "./components/TodoItemCreator";

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

function App() {
  return (
    <div className="App">
      <TodoItemCreator />
    </div>
  );
}

export default App;

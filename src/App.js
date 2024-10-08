import logo from './logo.svg';
import './App.css';
import {atom} from "recoil";

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

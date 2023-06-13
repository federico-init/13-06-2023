import Todo from "./components/todo";
import { todos } from "./mocks/todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TODOs</h1>
      <div className="App__todosList">
        {todos.map(todoItem => (
          <Todo key={todoItem.id} data={todoItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
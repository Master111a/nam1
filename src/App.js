import "./App.css";
// import Todo from "./components/todo/Todo";
// import Greet from "./components/Greet";
import Header from "./components/header/Header";
import Todo from "./components/todoapp/Todo";
import TodoList from "./components/todoapp/TodoList";
function App() {
    return (
        <div className="App">
            <Header />
            <Todo />

            {/* <TodoList /> */}

            {/* <Todo />     */}
        </div>
    );
}

export default App;

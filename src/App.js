import "./App.css";
import Header from "./components/header/Header";
// import Todo from "./components/todo-state/Todo";
import Todo from "./components/todo-reducer/Todo";
function App() {
    return (
        <div className="App">
            <Header />
            <Todo />
        </div>
    );
}

export default App;

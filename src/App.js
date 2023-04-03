import "./App.css";
import Header from "./components/header/Header";
// import Todo from "./components/todo-state/Todo";
// import Todo from "./components/todo-comp/Todo";
import Context from "./components/todo-reducer/Context";
function App() {
    return (
        <div className="App">
            <Header />
            <Context />
        </div>
    );
}

export default App;

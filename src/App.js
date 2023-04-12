import "./App.css";
import Validator from "./components/validator/Validator";
import Header from "./components/header/Header";
import Main from "./components/main-content/Main";
import { TodoProvider } from "./components/todo-reducer";
import { ValidateProvider } from "./components/validator";
function App() {
    return (
        <div className="App">
            <Header />
            <TodoProvider>
                <ValidateProvider>
                    <Main>
                        <Validator />
                        {/* <Todo /> */}
                    </Main>
                </ValidateProvider>
            </TodoProvider>
        </div>
    );
}

export default App;

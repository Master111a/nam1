import "./App.css";
import Validator from "./components/validator/Validator";
import Header from "./components/Layouts/header/Header";
import Main from "./components/main-content/Main";
import { TodoProvider } from "./components/todo-reducer";
import { ValidateProvider } from "./components/validator";
import Slider from "./components/slideshow/Slider";
function App() {
    return (
        <div className="App">
            <Header />
            {/* <TodoProvider>
                <ValidateProvider>
                    <Main>
                        <Validator />
                        <Todo />
                        <Slider />
                    </Main>
                </ValidateProvider>
            </TodoProvider> */}
        </div>
    );
}

export default App;

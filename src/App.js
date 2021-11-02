import './App.css';
import Answers from './components/Answers/Answers';
import Quiz from "./components/Quiz/Quiz";
import QuizContextProvider from "./contexts/QuizContext";

function App() {
  return (
    <div className="App">
      <QuizContextProvider>
        <Quiz />
        <Answers />
      </QuizContextProvider>
    </div>
  );
}

export default App;

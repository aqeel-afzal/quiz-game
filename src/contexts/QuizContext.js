import { useContext, createContext, useState, useEffect } from "react";

const QuizContext = createContext();
export const useQuizContext = () => useContext(QuizContext);

const QuizContextProvider = ({ children }) => {

    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [lifelineFiftyFifty, setLifelineFiftyFifty] = useState(false);
    const [lifelineTimer, setLifelineTimer] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timer, setTimer] = useState(10);

    // const addAnswer = (choice) => {
    //     setAnswers([...answers, choice]);
    // };

    useEffect(() => {
        fetch("data/questions.json")
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data);
            });
    }, []);

    return (
        <QuizContext.Provider
            value={{
                answers,
                currentQuestionIndex,
                lifelineFiftyFifty,
                lifelineTimer,
                questions,
                score,
                showScore,
                timer,

                setQuestions,
                setCurrentQuestionIndex,
                setAnswers,
                setLifelineFiftyFifty,
                setLifelineTimer,
                setScore,
                setShowScore,
                setTimer
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};


export default QuizContextProvider;

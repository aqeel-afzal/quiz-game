import { useQuizContext } from "../../contexts/QuizContext";

const Quiz = () => {
    const { questions, currentQuestionIndex, setCurrentQuestionIndex, answers, setAnswers } = useQuizContext();
    const currentQuestion = questions[currentQuestionIndex];

    const addAnswer = (choice) => {
        console.log(choice);
        setAnswers([...answers, choice]);

        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <section className="question">
            {currentQuestion && (
                <>
                    <label>{currentQuestion.label}</label>
                    <ul>
                        {currentQuestion.choices.map((choice, i) => {
                            return <li key={i} onClick={() => addAnswer(choice)} value={choice}>{choice.value}</li>;
                        })}
                    </ul>
                </>
            )}
        </section>
    );
};

export default Quiz;

import { useQuizContext } from "../../contexts/QuizContext";

const Answers = () => {

    const { answers } = useQuizContext();

    return (
        <div>
            {answers.map((answer, key) => <div key={key}>{answer.isCorrect ? 'Yes' : 'No'}</div>)}
        </div>
    );
};

export default Answers;
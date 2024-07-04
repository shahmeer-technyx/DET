import { useEffect, useMemo, useState } from "react";
import useStyles from "./style";


const Assessment = (props) => {

  const { assessment, lessonTitle, playFrom, handleNext, handleQuizResize, handleBeginTest = () => { }, handleFinishTest = () => { } } = props;

  const [state, setState] = useState({
    questionIdx: 0,
    score: 0,
    revealAnswer: false,
    selectedOptionIds: [],
  })

  useEffect(() => {
    setState({
      questionIdx: 0,
      score: 0,
      revealAnswer: false,
      selectedOptionIds: [],
    })
  }, [assessment])

  const { questionIdx, score, revealAnswer, selectedOptionIds } = state;

  const { questions, type } = assessment;
  const question = questions[questionIdx];

  const classes = useStyles();

  let totalQuestions = useMemo(() => {
    return questions.length;
  }, [assessment]);

  const handleNextQuestionClick = () => {
    const nextQuestionIdx = questionIdx + 1;
    if (nextQuestionIdx < totalQuestions) {
      setState(prevState => ({
        ...prevState,
        questionIdx: nextQuestionIdx,
        revealAnswer: false,
        selectedOptionIds: [],
      }));
    }
  };

  const correctOptionIds = useMemo(() => {
    return question.answerOptions
      .filter((answerOption) => answerOption.isCorrect)
      .map((answerOption) => answerOption.id);
  }, [questionIdx]);

  const handleAnswerClick = (optionId) => {
    if (state.revealAnswer) return;
    if (selectedOptionIds.includes(optionId)) {
      setState(prevState => ({
        ...prevState,
        selectedOptionIds: prevState.selectedOptionIds.filter(id => id !== optionId)
      }))
    } else if (correctOptionIds.length === selectedOptionIds.length + 1) {
      let accumulatedScore = 0;
      let tempSelectedOptionIds = [...state.selectedOptionIds, optionId];
      let division = 1 / correctOptionIds.length;
      tempSelectedOptionIds.forEach((selectedOptionId) => {
        if (correctOptionIds.includes(selectedOptionId)) {
          accumulatedScore += division;
        }
      });
      setState(prevState => ({
        ...prevState,
        revealAnswer: true,
        score: prevState.score + accumulatedScore,
        selectedOptionIds: [...state.selectedOptionIds, optionId]
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        selectedOptionIds: [...state.selectedOptionIds, optionId]
      }));
    }
  }

  return (
    <div className={classes.Assessment}>
      {type === "test" && !assessment.isAttempted
        ? (
          <div>
            <h2>Test Your Knowledge</h2>
            <h3>Ready to put your knowledge to the test? Take our test to see how well you've grasped the material. Get instant feedback and keep learning!</h3>
            <span>{totalQuestions + " Questions"}</span>
            <h3>{lessonTitle}</h3>
            <h4>You must answer {(totalQuestions * 0.8).toFixed(0)}/{totalQuestions} questions correctly to pass.</h4>
            <button onClick={handleBeginTest}>Begin Test</button>
          </div>

        )
        : (<div>
          <div>
            <button onClick={() => handleQuizResize(playFrom)}>{"><"}</button>
          </div>
          <div style={{ fontSize: "1.5rem" }}>
            <div>
              <p>{assessment.type} <span>(Questions {questionIdx + 1}/{totalQuestions})</span></p>
              <h3>{lessonTitle}</h3>
            </div>
            <div className="question-text">{question.questionText}</div>
          </div>
          <div>
            {question.answerOptions.map((answerOption, i) => {
              let key = assessment.id.toString() + questionIdx.toString() + answerOption.id.toString();
              let bgColor = revealAnswer
                ? (
                  selectedOptionIds.includes(answerOption.id)
                    ? (correctOptionIds.includes(answerOption.id) ? "green" : "red")
                    : "none") : "none";
              let borderColor = revealAnswer
                ? (
                  !selectedOptionIds.includes(answerOption.id)
                    ? (correctOptionIds.includes(answerOption.id) ? "5px solid green" : "2px solid grey")
                    : "2px solid grey") : selectedOptionIds.includes(answerOption.id) ? "5px solid blue" : "2px solid grey";
              return (
                <div key={key}>
                  <button
                    style={{ backgroundColor: bgColor, border: borderColor }}
                    onClick={() => handleAnswerClick(answerOption.id)}
                  >
                    {i + 1}. {answerOption.text}
                  </button>
                  {revealAnswer && answerOption.isCorrect && <p>{answerOption.desc}</p>}
                </div>
              )
            })}
          </div>
          <div style={{ marginTop: "1rem" }}>
            {questionIdx < totalQuestions - 1 ? (
              <>
                <button onClick={() => handleNextQuestionClick()}>Next question</button>
                <button onClick={() => { handleNext(playFrom, score) }}>Skip to next lesson</button>
              </>
            ) : (
              assessment.type === 'test' ? (
                <button onClick={handleFinishTest}>Finish test</button>
              ) : (
                <button onClick={() => { handleNext(playFrom, score) }}>Go to next lesson</button>
              )
            )
            }
          </div>
        </div>)}
    </div>

  )
}

export default Assessment;
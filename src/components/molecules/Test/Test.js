
const Test = ({ questions }) => {
  return (
    <div>
      {
        questions.map((question, i) => (
          <div key={i}>
            <h2>{question.question}</h2>
            <ul>
              {question.options.map((option, j) => (
                <li key={j}>
                  <label>
                    <input type="radio" name={`question${i}`} value={option} />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Test;
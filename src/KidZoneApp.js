import React from "react";
import { useState } from "react";

const quizQuestions = [
  {
    question: "What do plants need to grow?",
    options: ["Water, Sunlight, and Air", "Milk and Sugar", "Rocks and Sand"],
    answer: 0,
  },
  {
    question: "Which part of the body helps us to see?",
    options: ["Nose", "Eyes", "Ears"],
    answer: 1,
  },
  {
    question: "Which animal lives in water?",
    options: ["Dog", "Fish", "Cat"],
    answer: 1,
  },
];

export default function KidZoneApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleSubmit = () => {
    if (selected === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
    setSelected(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: '#2563eb' }}>KidZone Science Quiz</h1>
      {!quizComplete ? (
        <>
          <p><strong>Q{currentQuestion + 1}:</strong> {quizQuestions[currentQuestion].question}</p>
          {quizQuestions[currentQuestion].options.map((opt, idx) => (
            <div key={idx}>
              <button onClick={() => setSelected(idx)} style={{ margin: 5, background: selected === idx ? '#60a5fa' : '#fff' }}>
                {opt}
              </button>
            </div>
          ))}
          <button onClick={handleSubmit} disabled={selected === null}>Submit Answer</button>
        </>
      ) : (
        <>
          <h2>🎉 Great job!</h2>
          <p>You scored {score} out of {quizQuestions.length}!</p>
        </>
      )}
    </div>
  );
}
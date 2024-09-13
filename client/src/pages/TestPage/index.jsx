import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './testpage.module.scss';

const TestPage = ({ onBackToDashboard }) => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "What is the primary function of a neural network's activation function?",
      options: [
        "To initialize weights",
        "To introduce non-linearity",
        "To calculate the loss",
        "To update the learning rate"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which of the following is not a common type of neural network?",
      options: [
        "Convolutional Neural Network (CNN)",
        "Recurrent Neural Network (RNN)",
        "Feedforward Neural Network",
        "Quantum Neural Network (QNN)"
      ],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "What does the term 'epoch' refer to in machine learning?",
      options: [
        "A single training example",
        "The learning rate of the model",
        "One complete pass through the entire training dataset",
        "The accuracy of the model on the test set"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Which of the following is a supervised learning algorithm?",
      options: [
        "K-means clustering",
        "Principal Component Analysis (PCA)",
        "Linear Regression",
        "Autoencoders"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "What is the purpose of regularization in machine learning models?",
      options: [
        "To increase model complexity",
        "To reduce overfitting",
        "To speed up training time",
        "To increase the learning rate"
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    alert(`You scored ${score} out of ${questions.length}`);
  };

  return (
    <div className={styles.testPage}>
      <div className={styles.testContainer}>
        <button className={styles.backButton} onClick={onBackToDashboard}>
          <ArrowLeft className={styles.backIcon} /> Back to Dashboard
        </button>
        <h1 className={styles.pageTitle}>MindMentor Test</h1>
        {questions.map((q, qIndex) => (
          <div key={q.id} className={styles.questionCard}>
            <h2 className={styles.questionNumber}>Question {qIndex + 1}</h2>
            <p className={styles.questionText}>{q.question}</p>
            <div className={styles.optionsContainer}>
              {q.options.map((option, index) => (
                <label key={index} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={index}
                    checked={answers[q.id] === index}
                    onChange={() => handleAnswerSelect(q.id, index)}
                    className={styles.optionInput}
                  />
                  <span className={styles.optionText}>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default TestPage;
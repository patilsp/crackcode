'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Quiz() {
    const questions = [
        {
          question: "What does HTML stand for?",
          answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false },
          ],
        },
        {
          question: "Which HTML tag is used to define an internal style sheet?",
          answers: [
            { text: "<style>", correct: true },
            { text: "<css>", correct: false },
            { text: "<script>", correct: false },
            { text: "<head>", correct: false },
          ],
        },
        {
          question: "Which property is used to change the background color in CSS?",
          answers: [
            { text: "bgcolor", correct: false },
            { text: "backgroundColor", correct: false },
            { text: "color", correct: false },
            { text: "background-color", correct: true },
          ],
        },
        {
          question: "Inside which HTML element do we put JavaScript?",
          answers: [
            { text: "<script>", correct: true },
            { text: "<js>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<code>", correct: false },
          ],
        },
        {
          question: "Which company developed JavaScript?",
          answers: [
            { text: "Netscape", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "Apple", correct: false },
          ],
        },
        {
          question: "How do you write 'Hello World' in an alert box?",
          answers: [
            { text: "msg('Hello World')", correct: false },
            { text: "alert('Hello World')", correct: true },
            { text: "alertBox('Hello World')", correct: false },
            { text: "console.log('Hello World')", correct: false },
          ],
        },
        {
          question: "Which symbol is used for comments in JavaScript?",
          answers: [
            { text: "//", correct: true },
            { text: "/*", correct: false },
            { text: "<!--", correct: false },
            { text: "#", correct: false },
          ],
        },
        {
          question: "How do you create a function in JavaScript?",
          answers: [
            { text: "function myFunc()", correct: true },
            { text: "def myFunc()", correct: false },
            { text: "create myFunc()", correct: false },
            { text: "function:myFunc()", correct: false },
          ],
        },
        {
          question: "Which CSS property controls the text size?",
          answers: [
            { text: "font-size", correct: true },
            { text: "text-style", correct: false },
            { text: "font-style", correct: false },
            { text: "text-size", correct: false },
          ],
        },
        {
          question: "Which HTML element defines the title of a document?",
          answers: [
            { text: "<title>", correct: true },
            { text: "<head>", correct: false },
            { text: "<meta>", correct: false },
            { text: "<h1>", correct: false },
          ],
        },
      ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswerClick = (correct, index) => {
    setSelected(index);
    if (correct) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setShowScore(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8"
        initial="hidden"
        animate="show"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Interactive Quiz</h1>

        {showScore ? (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-2xl font-semibold mb-6 text-green-600">
              🎉 You scored {score} out of {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 text-lg"
            >
              Restart Quiz
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {currentIndex + 1}. {currentQuestion.question}
            </h2>

            <div className="flex flex-col space-y-4 mb-8">
              {currentQuestion.answers.map((answer, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerClick(answer.correct, index)}
                  disabled={selected !== null}
                  className={`text-left text-lg font-medium p-4 rounded-lg border transition-all duration-200
                    ${selected === index
                      ? answer.correct
                        ? 'bg-green-200 border-green-600'
                        : 'bg-red-200 border-red-600'
                      : 'hover:bg-blue-50 border-gray-300'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  {answer.text}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              disabled={selected === null}
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 disabled:opacity-40"
              whileTap={{ scale: 0.97 }}
            >
              {currentIndex === questions.length - 1 ? '🎯 Submit Quiz' : 'Next →'}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}

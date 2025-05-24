'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { Code } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
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
  const [selected, setSelected] = useState<number | null>(null);
  const [showScore, setShowScore] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswerClick = (correct: boolean, index: number) => {
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
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden py-16 px-6">
     
     {/* <motion.header
        className="flex flex-col items-center relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Code className="w-6 h-6 text-white" />
          </motion.div>
          <Link href="/"><span className="text-2xl font-bold text-gray-800">
            Crack <span className="text-purple-600">The Code</span>
          </span>
          </Link>
          
        </div>
        
      </motion.header> */}
      <motion.div
        className="w-full max-w-3xl px-6 py-4"
        initial="hidden"
        animate="show"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center text-gray-600 mb-10">
          🚀Daily Quiz
        </h1>

        <AnimatePresence mode="wait">
          {showScore ? (
            <motion.div
              key="score"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-3xl font-bold mb-6 text-lime-300">
                🎉 You scored {score} / {questions.length}
              </p>
              <button
                onClick={handleRestart}
                className="bg-white text-purple-700 px-8 py-4 text-lg rounded-full font-semibold hover:bg-purple-100 transition-all"
              >
                Restart Quiz
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h2 className="mb-10 text-2xl font-semibold text-left text-gray-700">
                {currentIndex + 1}. {currentQuestion.question}
              </h2>

              <div className="grid gap-4">
                {currentQuestion.answers.map((answer, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerClick(answer.correct, index)}
                    disabled={selected !== null}
                    whileTap={{ scale: 0.97 }}
                    className={`p-4 rounded-md text-left text-gray-600 text-md font-medium transition-all duration-300 border-2 
                      ${
                        selected === index
                          ? answer.correct
                            ? 'bg-green-500 border-green-300 text-white'
                            : 'bg-red-500 border-red-300 text-white'
                          : 'border-gray-200 hover:bg-opacity-20'
                      }`}
                  >
                    {answer.text}
                  </motion.button>
                ))}
              </div>

              <div className="text-center mt-8">
                <motion.button
                  onClick={handleNext}
                  disabled={selected === null}
                  className="bg-white text-indigo-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-100 disabled:opacity-40"
                >
                  {currentIndex === questions.length - 1
                    ? '🎯 Submit Quiz'
                    : 'Next →'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

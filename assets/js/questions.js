// List of questions and answers

const questions = [
    {
      question: "Which symbol is used for comments in JavaScript?",
      answers: [
        
        { text: "--", correct: false },
        { text: "/* */", correct: false },
        { text: "//", correct: true },
        { text: "#", correct: false },
      ],
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: [
        
        { text: "var", correct: true },
        { text: "let", correct: false },
        { text: "const", correct: false },
        { text: "variable", correct: false },
      ],
  
    },
    {
      question: "What does the 'DOM' stand for?",
      answers: [
        
        { text: "Data Object Model", correct: false },
        { text: "Document Oriented Model", correct: false },
        { text: "Data Oriented Model", correct: false },
        {text: "Document Object Model", correct: true },
      ],
    },
     { question: "What is the result of 5 + '5' in JavaScript?",
      answers: [
    
      { text: "10", correct: false },
      { text: "55", correct: true },
      { text: "55", correct: false },
      { text: "Error", correct: false },
     ],
  
     },
  ];
  
  export default questions;
  
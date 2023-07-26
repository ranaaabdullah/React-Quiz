import React, { useState } from "react";
import questions from "../quiz.json";

const QuizPage = ({ handleScore, handleSetPage }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSelectedOption, setIsSelectedOption] = useState(false);
  const [clickedOption, setClickedOption] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  // const answerIndex = options.indexOf(answer)

  const { question, options, answer } = questions[currentQuestion];

  const handleClickNext = () => {
    if (currentQuestion === 9) {
      handleSetPage("Result");
    }
    setCurrentQuestion(currentQuestion + 1);
    setIsSelectedOption(false);
    setClickedOption(null);
    setClickedIndex(null);
    if (correctAnswer) {
      handleScore();
    }
  };

  const handleOptionClick = (option, index) => {
    setClickedOption(option);
    setClickedIndex(index);
    setIsSelectedOption(true);
  };

  const correctAnswer = clickedOption === answer;

  const renderedOptions = options.map((option, index) => {
    const correctOption = option === answer;
    return (
      <button
        key={index}
        style={{
          backgroundColor: isSelectedOption
            ? clickedIndex === index
              ? correctAnswer
                ? "green"
                : "red"
              : ""
            : "",
        }}
        disabled={isSelectedOption}
        onClick={() => handleOptionClick(option, index)}
        className={` bg-zinc-800   text-white text-start mb-5 p-2 rounded-md ${
          isSelectedOption && correctOption && " correct-style"
        }`}
      >
        {option}
      </button>
    );
  });

  return (
    <div>
      <div className="w-full  h-screen flex  justify-center items-center  bg-zinc-800">
        <div
          className="border border-white rounded-lg w-5/6  md:w-7/12   p-8"
          style={{ backgroundColor: "#3d3d3d" }}
        >
          <div className="  text-xl mt-1 flex justify-between font-bold ">
            <h2>{question}</h2>
            <h2 className="text-green-400">{currentQuestion + 1}/10</h2>
          </div>
          <div className="flex flex-col mt-4 ">{renderedOptions}</div>
          <div className="nextButton">
            <button
              className="bg-blue-500 text-white font-bold w-full mt-4 h-9 rounded-lg "
              onClick={handleClickNext}
              disabled={!isSelectedOption}
            >
              {" "}
              Next Question{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

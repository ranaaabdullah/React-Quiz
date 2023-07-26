import React from "react";

const ResultPage = ({ handleQuizReset, score }) => {
  const handleClick = () => {
    handleQuizReset();
  };

  const result = score>50?"Awesome":"Oops"
  const colorCard = score>50 ? "bg-green-500":"bg-red-500"
  
  return (
    <div>
      <div className="flex  justify-center items-center w-full bg-zinc-800 h-screen">
        <div   className=  {` ${colorCard} flex justify-center items-center flex-col w-11/12 md:w-5/12 text-center rounded-lg py-10 p-7 `}>
          <div className=""> 
            <h1 className="text-white text-4xl font-bold">{result}!</h1>
            <h2 className="text-white m-4 text-2xl font-semibold">Your Score is {score} out of 100</h2>
          </div>

          <button className="bg-white rounded-md p-2 font-bold mt-3 w-32 j " onClick={handleClick}>Start Over</button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

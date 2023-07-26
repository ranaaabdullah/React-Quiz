import { useState } from "react";
import StartPage from "./Pages/StartPage";
import QuizPage from "./Pages/QuizPage";
import ResultPage from "./Pages/ResultPage";



function App() {
  const [pageToShow , setpageToShow] = useState("Start");
  const [score,setScore] = useState(0)
 
  const handleSetPage = (term) => {
setpageToShow(term)
  }

const handleQuizReset = () => {
  setScore(0);
  handleSetPage("Quiz")

}

const handleScore = ( ) => {
setScore(score+10)
}

  return (

  <>
 
  {pageToShow==="Start"&&<StartPage handleScore={handleScore} handleSetPage={handleSetPage}/>}
  {pageToShow==="Quiz" && <QuizPage handleScore={handleScore} handleSetPage={handleSetPage}/>}
  {pageToShow==="Result" && <ResultPage handleScore={handleScore} score={score} handleQuizReset={handleQuizReset}/>}

  
  
  
  
  
  </>
  );
}

export default App;

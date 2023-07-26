
function StartPage({handleSetPage}) {

const handleclick = () => {
  handleSetPage("Quiz");
}

return (
  <div className='flex  justify-center items-center w-full  bg-zinc-800 h-screen'>
        <div className="">
            <div>
              <h1 className=" text-white text-4xl font-bold  ">  Basic React JS Quiz  </h1>
             </div>
              <div className='text-center' >
                <button onClick={handleclick} className=" bg-white px-5 py-2 mt-6  rounded text-black-900 font-bold  cursor-pointer ">Start Quiz</button>
              </div>
        </div>
    </div>
)

}

export default StartPage
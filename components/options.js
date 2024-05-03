import React from "react";

const Options = ({
  answerOptions,
  handleAnswerOption,
  selectedOptions,
  currentQuestion,
}) => {
  return (
    <div className="flex flex-col w-full">
      {answerOptions.map((answer, index) => (
        <div
          key={index}
          onClick={(e) => handleAnswerOption(answer)}
          className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
        >
          <input
            type="radio"
            name={answer}
            value={answer}
            onChange={(e) => handleAnswerOption(answer)}
            checked={answer === selectedOptions[currentQuestion]?.answerByUser}
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-white">{answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;

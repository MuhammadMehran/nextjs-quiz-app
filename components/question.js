import React from "react";

const Question = ({ q, currentQuestion, totalQuestions }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h4 className="mt-10 text-xl text-white">
        Question {currentQuestion} of {totalQuestions}
      </h4>
      <div className="mt-4 text-2xl text-white">{q}</div>
    </div>
  );
};

export default Question;

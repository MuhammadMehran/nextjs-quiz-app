import React from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const Options = ({
  answerOptions,
  handleAnswerOption,
  selectedOptions,
  currentQuestion,
  correctAnswer,
  showCorrect,
}) => {
  let divClass =
    "flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer rounded-xl";
  if (showCorrect) {
    if (correctAnswer == selectedOptions[currentQuestion]?.answerByUser) {
      divClass += " bg-green-100";
    } else {
      divClass += " bg-red-100";
    }
  }
  let condition =
    correctAnswer == selectedOptions[currentQuestion]?.answerByUser
      ? correctAnswer
      : selectedOptions[currentQuestion]?.answerByUser;
  return (
    <div className="flex flex-col w-full">
      {answerOptions.map((answer, index) => (
        <div
          key={index}
          onClick={(e) => !showCorrect && handleAnswerOption(answer)}
          className={
            condition == answer
              ? divClass
              : "flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer rounded-xl"
          }
        >
          {showCorrect ? (
            <>
              {answer == correctAnswer ? (
                <CheckIcon w={4} h={4} color="green.500" />
              ) : (
                <CloseIcon w={4} h={4} color="red.500" />
              )}
            </>
          ) : (
            <input
              type="radio"
              name={answer}
              value={answer}
              onChange={(e) => handleAnswerOption(answer)}
              checked={
                answer === selectedOptions[currentQuestion]?.answerByUser
              }
              className="w-6 h-6 bg-black"
            />
          )}
          <p className="ml-6 " dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      ))}
    </div>
  );
};

export default Options;

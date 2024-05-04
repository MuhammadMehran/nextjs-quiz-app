import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const Question = ({ q, currentQuestion, totalQuestions }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <Heading className="mt-10" size={"lg"}>
        Question {currentQuestion} of {totalQuestions}
      </Heading>
      <Text fontSize="lg" className="mt-4">
        {q}
      </Text>
    </div>
  );
};

export default Question;

import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

const PaginationButtons = (
  {
    //   currentPage,
    //   totalPages,
    //   onNextClick,
    //   onPrevClick,
  }
) => {
  return (
    <Flex justifyContent="space-between">
      <ChevronLeftIcon boxSize={20} color="blue.500" />
      <ChevronRightIcon boxSize={20} color="blue.500" />
    </Flex>
  );
};

export default PaginationButtons;

import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
const PaginationButtons = (
  {
    //   currentPage,
    //   totalPages,
    //   onNextClick,
    //   onPrevClick,
  }
) => {
  return (
    <div className={`flex justify-between items-center my-4`}>
      <ChevronLeftIcon boxSize={20} color="blue.500" />
      <ChevronRightIcon boxSize={20} color="blue.500" />
    </div>
  );
};

export default PaginationButtons;

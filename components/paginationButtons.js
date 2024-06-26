import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Button } from "@chakra-ui/react";

const PaginationButtons = ({
  currentPage,
  totalPages,
  onNextClick,
  onPrevClick,
}) => {
  return (
    <Flex justifyContent="space-between">
      {currentPage == 1 ? (
        <IconButton
          variant="ghost"
          aria-label="Previous Page"
          color="blue.500"
          isDisabled
          icon={<ChevronLeftIcon boxSize={20} />}
        />
      ) : (
        <IconButton
          variant="ghost"
          aria-label="Previous Page"
          color="blue.500"
          onClick={onPrevClick}
          icon={<ChevronLeftIcon boxSize={20} />}
        />
      )}
      <Button colorScheme="blue" variant="outline">
        Page {currentPage} of {totalPages}
      </Button>
      {currentPage == totalPages ? (
        <IconButton
          variant="ghost"
          aria-label="Next Page"
          color="blue.500"
          isDisabled
          icon={<ChevronRightIcon boxSize={20} />}
        />
      ) : (
        <IconButton
          variant="ghost"
          aria-label="Next Page"
          color="blue.500"
          onClick={onNextClick}
          icon={<ChevronRightIcon boxSize={20} />}
        />
      )}
    </Flex>
  );
};

export default PaginationButtons;

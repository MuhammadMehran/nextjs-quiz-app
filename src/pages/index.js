import Head from "next/head";
import { useState, useEffect } from "react";
import { useSteps } from "@chakra-ui/react";
import CategoryCard from "../../components/categoryCard";
import PaginationButtons from "../../components/paginationButtons";
import { CATEGORIES } from "../../lib/categories";
import Lottie from "lottie-react";

import { quizAnimation } from "../../lib/quiz";
import axios from "axios";
export default function index() {
  const [totalPages, setTotalPages] = useState(
    Math.ceil(CATEGORIES.length / 12)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const PAGE_SIZE = 12;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visibleCategories = CATEGORIES.slice(startIndex, endIndex);

  return (
    <>
      <Head>
        <title>Quiz App</title>
      </Head>

      <div style={{ height: "200px" }}>
        <Lottie
          animationData={quizAnimation}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div class="flex flex-col pt-5 pb-5 mt-5 justify-center items-center w-full bg-blue-500">
        <h2 class="text-3xl text-white font-bold ">Category Selection</h2>
      </div>

      <div className="m-12 mt-0 p-10 rounded-xl flex justify-center items-center bg-white-300">
        <div className="container mx-0 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-5">
            {visibleCategories.map((cat) => (
              <CategoryCard key={cat.id} title={cat.title} img={cat.img} />
            ))}
          </div>
          <div className="mt-10">
            <PaginationButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onNextClick={nextPage}
              onPrevClick={prevPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

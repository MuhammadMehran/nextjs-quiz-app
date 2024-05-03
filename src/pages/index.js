import Head from "next/head";
import { useState, useEffect } from "react";
import { useSteps } from "@chakra-ui/react";
import CategoryCard from "../../components/categoryCard";
import PaginationButtons from "../../components/paginationButtons";
import { CATEGORIES } from "../../lib/categories";
import axios from "axios";
export default function test() {
  return (
    <>
      <Head>
        <title>Quiz App</title>
      </Head>

      <div class="flex flex-col pt-5 pb-5 mt-10 justify-center items-center w-full bg-blue-300">
        <h2 class="text-3xl text-white font-bold ">Category Selection</h2>
      </div>

      <div className="m-12 p-10 rounded-xl flex justify-center items-center bg-blue-300">
        <div className="container mx-0 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-5">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} title={cat.title} img={"/gk.jpg"} />
            ))}

            {/* <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} />
            <CategoryCard title={"General Knowledge"} img={"/hero-card.jpeg"} />
            <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} />
            <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} />
            <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} />
            <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} />
            <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} />
            <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} />
            <CategoryCard title={"General Knowledge"} img={"/hero-card.jpeg"} />
            <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} />
            <CategoryCard title={"General Knowledge"} img={"/gk.jpg"} /> */}
          </div>
          <PaginationButtons />
        </div>
      </div>
    </>
  );
}

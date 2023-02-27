import React, { useState } from "react";
import PricingKonsultasi from "./PricingKonsultasi";
import PricingTutor from "./PricingTutor";

const Pricing = () => {
  const [isTutor, setIsTutor] = useState("konsultasi");

  const konsultasiHandler = () => {
    setIsTutor("konsultasi");
  };

  const tutorHandler = () => {
    setIsTutor("tutor");
  };

  return (
    <div data-aos="fade-down" data-aos-delay="200">
      <div class="min-h-[1100px] pb-28 sm:pb-0">
        <div class="lg:h-[767px]">
          <div class="max-w-7xl min-h-screen mx-auto p-4 sm:p-10 lg:py-20">
            <div class="max-w-5xl flex-col justify-center items-center text-center mx-auto bg  text-white tracking-widest pb-10 lg:pb-20">
              <h1 class="h2 mb-6 xl:mb-12">
                The Right Price for You, Whoeveryou re
              </h1>
              <p class="lead text-center ">
                Lorem ipsum has been the industry's standard dummy text ever
                since , when an unknown printer took a galley of type and
                scrambled.
              </p>
            </div>
            <div class="max-w-xl flex-col justify-center items-center text-center mx-auto bg  text-white tracking-widest pb-10 lg:pb-20">
              <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex">
                <li class="w-full">
                  <button
                    onClick={konsultasiHandler}
                    class="inline-block w-full p-4 bg-white hover:text-gray-700  rounded-r-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  >
                    Konsultasi Statistik
                  </button>
                </li>
                <li class="w-full">
                  <button
                    onClick={tutorHandler}
                    class="inline-block w-full p-4 bg-white hover:text-gray-700  rounded-r-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  >
                    Tutor Statistik
                  </button>
                </li>
              </ul>
            </div>
            {isTutor === "konsultasi" ? (
              <PricingKonsultasi />
            ) : (
              <PricingTutor />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

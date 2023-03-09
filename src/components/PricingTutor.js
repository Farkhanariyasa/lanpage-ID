import React from "react";

const PricingTutor = () => {
  return (
    <div class="flex-col" data-aos="fade-down" data-aos-delay="200">
      <div class="flex flex-col sm:flex-row    ">
        <div class="py-12 pr-12 pl-4  w-[375px] xl:w-[800px] ">
          <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
            <div class="px-8 flex justify-center items-center">
              <h4 class="text-3xl font-bold text-gray-800">INTROVERT </h4>
            </div>
            <h1 class="text-3xl text-center font-bold">
              <span class="text-[16px] italic font-normal">Start </span>
              Rp299.000
            </h1>
            <p class="px-4 text-center text-sm ">
              Paket ini cocok buat kamu yang pengen belajar dan ditutorin
              one-on-one sama tutornya, alias private sama tutor. Kami punya
              tutor yang pastinya profesional, berpengalaman, dan dengan
              berbagai tipe kepribadian. Mau request yang sesama introvert? Mau
              yang heboh? Atau malah yang setengah-setengah? Ada semua kok di
              tim kami!
            </p>

            <div class="text-center">
              <button
                class="rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden my-4"
                onClick={() => {
                  window.location.href =
                    "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Tutor%20Introvert";
                }}
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
        <div class="py-12 pl-4 w-[325px] xl:w-[800px]">
          <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
            <div class="px-8 flex justify-center items-center">
              <h4 class="text-3xl font-bold text-gray-800">EXTROVERT</h4>
            </div>
            <h1 class="text-3xl text-center font-bold">
              <span class="text-[16px] italic font-normal">Start </span>
              Rp99.000
              <span class="text-[16px] italic font-normal">min 3 orang </span>
            </h1>
            <p class="px-4 pl-32 text-center text-sm w-[500px]">
              Paket ini cocok untuk kamu yang pengen belajar ramean bareng
              temen-temen. Tenang aja, kami punya tutor yang profesional,
              berpengalaman dan pastinya asik banget sehingga kamu pasti bisa
              ngerti materi Statistik dengan sangat mudah!
            </p>

            <div class="text-center  ">
              <button
                class="rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden my-4"
                onClick={() => {
                  window.location.href =
                    "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Tutor%20Extrovert";
                }}
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTutor;

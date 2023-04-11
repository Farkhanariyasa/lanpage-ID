import React from "react";

const PricingTutor = () => {
  return (
    <div className="flex justify-center gap-x-[20px] xl:flex-row flex-col gap-y-5">
      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-8 ">
        <h2 className="h2 text-center">Introvert</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Mulai dari </span>
          Rp299.000
        </h1>
        <div class="p-4 text-center">
          Paket ini cocok buat kamu yang pengen belajar dan ditutorin one-on-one
          (private). Pastinya tutor kami profesional, berpengalaman, dan dengan
          berbagai tipe kepribadian.
        </div>
        <ul class="text-start list-disc pl-6 mb-10">
          <li>Mau request yang sesama introvert?</li>
          <li>Mau yang heboh?</li>
          <li> Atau malah yang setengah-setengah?</li>
        </ul>
        <div class="text-center">Ada semua kok di tim kami!</div>
        <div class="text-center">
          <button
            class="rounded-2xl h-12  w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden my-4"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Ordinary",
                "_blank"
              );
            }}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>

      <div className="h-auto border-2 border-[#387fbc]  xl:w-[25%]  bg-white transition-all duration-500 transform hover:-translate-y-6 hover:scale-10 shadow-xl hover:shadow-2xl cursor-pointer rounded-[20px] p-4">
        <h2 className="h2 text-[32px] mt-3 text-center">Ekstrovert</h2>
        <h1 class="text-2xl text-center font-bold">
          <span class="text-[16px] italic font-normal">Mulai dari </span>
          Rp99.000
        </h1>
        <h3 className="h3 text-[16px] mt-3 text-center">
          per orang (min. 3 orang)
        </h3>
        <div class="p-4 text-center">
          Paket ini cocok untuk kamu yang pengen belajar ramean bareng
          temen-temen. Tenang aja, kami punya tutor yang profesional,
          berpengalaman dan pastinya asik banget sehingga kamu pasti bisa ngerti
          materi Statistik dengan sangat mudah!
        </div>
        <div class="text-center">
          <button
            class="rounded-2xl h-12 w-48 bg-[#FEE63C] font-bold text-lg text-primary relative overflow-hidden mt-[9.5rem]"
            onClick={() => {
              window.open(
                "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Extraordinary",
                "_blank"
              );
            }}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingTutor;

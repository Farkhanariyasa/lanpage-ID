import React from "react";

const PricingTutor = () => {
  return (
    <div class="flex-col xl:mb-[400px]" data-aos="fade-down" data-aos-delay="200">
      <div class="flex flex-col sm:flex-row    ">
        <div class="py-12 pr-12 pl-4  w-[375px] xl:w-[800px]">
          <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
            <div class="px-8 flex justify-center items-center">
              <h4 class="text-3xl font-bold text-gray-800">BASIC</h4>
            </div>
            <h1 class="text-3xl text-center font-bold">
              <span class="text-[16px] italic font-normal">Free </span>Rp0.00
            </h1>
            <p class="px-4 text-center text-sm ">
              Paket ini cocok untuk kamu yang mau kenalan dulu sama kami dan
              pengen share permasalahan yang dihadapi di
              penelitian/skripsi/tesis/disertasi kamu
            </p>
            <ul class="text-center">
              <li>
                <div class="font-semibold">Free 15 menit meeting</div>
              </li>
              <li>
                <div class="font-semibold">.</div>
              </li>
              <li>
                <div class="font-semibold">.</div>
                <div class="font-semibold">.</div>
                <div class="font-semibold">.</div>
              </li>
            </ul>
            <div class="text-center">
              <button
                class="rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden my-4"
                onClick={() => {
                  window.location.href =
                    "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Basic";
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
              <h4 class="text-3xl font-bold text-gray-800">ORDINARY</h4>
            </div>
            <h1 class="text-3xl text-center font-bold">
              <span class="text-[16px] italic font-normal">Start </span>
              Rp499.000
            </h1>
            <p class="px-4 text-center text-sm ">
              Paket ini cocok untuk kamu yang cuma perlu diolahin datanya,
              dijelasin cara mengerjakannya saja.
              <span class="text-white">
                dfkjshuyi sdfshduuuuuudjfsjdfjsdfjksdfsjdfdffsdn njjnnj
              </span>
            </p>
            <ul class="text-center">
              <li>
                <div class="font-semibold">Running Data</div>
              </li>
              <li>
                <div class="font-semibold">Gratis Interpretasi</div>
              </li>
              <li>
                <div class="font-semibold">
                  Materi Metode Statistik yang digunakan
                </div>
              </li>
              <li>
                <div class="font-semibold">Free 2x meeting</div>
              </li>
              <li>
                <div class="font-semibold">.</div>
              </li>
            </ul>
            <div class="text-center  ">
            <button
                class="rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden my-4"
                onClick={() => {
                  window.location.href =
                    "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Ordinary";
                }}
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col  sm:flex-row">
        <div class="py-12 pl-4 pr-12 w-[375px] xl:w-[800px]">
          <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
            <div class="px-8 flex justify-center items-center">
              <h4 class="text-3xl font-bold text-gray-800">EXTRAORDINARY</h4>
            </div>
            <h1 class="text-3xl text-center font-bold">
              <span class="text-[16px] italic font-normal">Start </span>
              Rp599.000
            </h1>
            <p class="px-4 text-center text-sm ">
              Paket ini cocok untuk kamu yang perlu diolahin datanya, dijelasin
              cara mengerjakannya, plus dibantu menuliskan hasil dan
              pembahasannya.
            </p>
            <ul class="text-center">
              <li>
                <div class="font-semibold">Running Data</div>
              </li>
              <li>
                <div class="font-semibold">Gratis Interpretasi</div>
              </li>
              <li>
                <div class="font-semibold">
                  Materi Metode Statistik yang digunakan
                </div>
              </li>
              <li>
                <div class="font-semibold">Free 2x meeting</div>
              </li>
              <li>
                <div class="font-semibold">Free 2x revisi minor</div>
              </li>
            </ul>
            <div class="text-center  ">
            <button
                class="rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden my-4"
                onClick={() => {
                  window.location.href =
                    "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Extraordinary";
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
              <h4 class="text-3xl font-bold text-gray-800">MEETING ONLY</h4>
            </div>
            <h1 class="text-3xl text-center font-bold">
              <span class="text-[16px] italic font-normal">Only </span>Rp350.000
            </h1>
            <p class="px-4 text-center text-sm flex-col justify-start items-center">
              Paket ini cocok untuk kamu yang :
              <ul class="list-disc list-inside w-[250px] pl-[100px] xl:w-[500px]">
                <li>
                  Udah ngolah sendiri data tapi bingung cara baca output 
                </li>
                <li>
                  Udah ngolah dan interpretasi sendiri tapi gak yakin apakah
                  proses yang udah dilakukan sudah benar atau belum
                </li>
                <li>Belum tau sama sekali mau ngolah data apa </li>
              </ul>
            </p>
            <ul class="text-center">
              <li>
                <div class="font-semibold">1x meeting dengan durasi 2 jam</div>
              </li>
              <li class="mb-[33px]">
                <div class="font-semibold">.</div>
              </li>
            </ul>
            <div class="text-center  ">
            <button
                class="rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden my-4"
               onClick={() => {
                window.location.href =
                  "https://wa.me/62811908400?text=Halo%20Admin%20Saya%20ingin%20order%20paket%20Meeting%20Only";
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

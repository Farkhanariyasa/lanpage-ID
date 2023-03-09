import React from "react";

const FAQ = () => {
  return (
    <div>
      <div>
        <section class="text-gray-700">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Pengerjaannya berapa hari?
                  </summary>

                  <span>
                    Normally,  pengerjaan olah data bisa selesai dalam waktu 2-4 hari karena ada antrian. Tapi kalau kamu urgent banget harus kelar besoknya, kita bisa kok siapin paket express buat kamu. Kamu cuma nambah 20% aja dari harga yang sudah disepakati. 
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Hasil olah datanya beneran akurat?
                  </summary>

                  <span>
                    Pastinya!!! Tim kami dilead oleh statistician lulusan Amerika Serikat yang udah biasa menghadapi klien ga cuma dari Indonesia tapi juga dari luar negeri loh!
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Nanti diajarin nggak cara ngolah datanya?
                  </summary>

                  <span>
                    Bisa donk! Jadi setelah teman-teman mengirimkan datanya, dalam waktu 2-4 hari, teman-teman akan kami ajak meeting untuk kami ajarkan cara pengolahan datanya dari awal sampai bagaimana cara membacanya!
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Kalo hasilnya nggak sesuai harapan gimana?
                  </summary>

                  <span>
                  Kita akan bantu menemukan metode yang tepat sesuai dengan kondisi data kamu. Kami tidak akan memanipulasi data alias ngubah-ngubah data apapun karena kan ga boleh ya… Instead, kami akan bantu mencarikan justifikasi yang bisa kamu pakai buat menghadapi sidang.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Kalo ada revisi gimana? Bayar lagi nggak?
                  </summary>

                  <span>
                    Temen-temen dapat GRATIS revisi minor kok. Kecuali kalau berubah total dari awal (bahkan data dan tujuan penelitiannya ganti), nanti ada charge 50% dari harga yang sudah disepakati.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Firstat bisa melayani aplikasi statistik apa aja?
                  </summary>

                  <span class="px-4 py-2">
                    Kita bisa bantu analisa data kamu dengan program statistik apa aja, mulai dari SPSS, R, Python, SmartPLS, MPlus, EVIEWS, SAS, STATA.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Bisa ketemu offline nggak?
                  </summary>

                  <span class="px-4 py-2">
                    Ooo bisa dong!!! hubungin aja dulu, kalo Tuhan mengizinkan kita bisa ketemu kok di mana pun kamu berada. Soalnya, tim konsultan kami tersebar di berbagai kota di Indonesia.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Cara pemesanannya gimana? 
                  </summary>

                  <span class="px-4 py-2">
                    1. Hubungi kontak kami melalui WA, telepon, atau email yang sudah tertera
                    2. Free konsultasi untuk mengetahui apakah projek kamu memungkinkan untuk kami kerjakan
                    3. Kamu akan diminta untuk mengirimkan bab 1,2 dan 3 atau setidaknya hipotesis penelitian serta data set
                    4. Kamu melakukan 50% pembayaran 
                    5. Proses pengerjaan analisis akan memakan waktu selama 1 - 3 hari
                    6. Hasil analisis akan disampaikan atau didiskusikan melalui meeting (online/offline)
                    7. Kamu melakukan sisa 50% pembayaran 
                    8. Ketika pembayaran sudah diterima, hasil, laporan dan lampiran akan dikirimkan melalui email
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Metode pembayarannya gimana? 
                  </summary>

                  <span class="px-4 py-2">
                    Untuk saat ini kami hanya menggunakan transfer bank untuk metode pembayaran. Kamu boleh bayar 50% dulu di awal ketika kita sudah deal, dan 50% sisanya bisa kamu bayarkan setelah dapat hasilnya.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;

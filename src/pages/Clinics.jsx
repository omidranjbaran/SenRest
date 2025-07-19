import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sampleClinics = [
  {
    id: 1,
    title: "کلینیک عمومی نور",
    image: "./images/online-visit.jpg",
  },
  {
    id: 2,
    title: "کلینیک دندانپزشکی لبخند",
    image: "./images/project4.avif",
  },
  {
    id: 3,
    title: "کلینیک پوست و مو زیبایی",
    image: "images/skin-care.webp",
  },
  {
    id: 4,
    title: "کلینیک اطفال شادی",
    image: "images/mental-health.png",
  },
  {
    id: 5,
    title: "کلینیک چشم پزشکی روشن",
    image: "images/service2.jpg",
  },
  {
    id: 6,
    title: "کلینیک ارتوپدی مهر",
    image: "images/service4.jpg",
  },
];

function ClinicSearch() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [region, setRegion] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`جستجو با معیارها:\nکلمه: ${query}\nنوع: ${type}\nمنطقه: ${region}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4 py-10 gap-10"
      dir="rtl"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('./images/clinicimage2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>
        {`
          input::placeholder {
            font-size: 0.875rem;
            opacity: 0.7;
            text-align: right;
          }
        `}
      </style>

      <motion.form
        onSubmit={handleSearch}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-80 mt-50 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-5xl w-full"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
          جستجوی پیشرفته کلینیک‌ها
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative min-w-0">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="نام کلینیک یا تخصص مورد نظر"
              className="w-full px-4 py-3 pr-16 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-right text-base"
              style={{ direction: "rtl", textAlign: "right" }}
            />
            <SearchIcon className="w-6 h-6 text-indigo-500 absolute top-3 right-4 pointer-events-none" />
          </div>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-right text-base"
            style={{ direction: "rtl" }}
          >
            <option value="">نوع کلینیک</option>
            <option value="general">کلینیک عمومی</option>
            <option value="dental">کلینیک دندانپزشکی</option>
            <option value="dermatology">کلینیک پوست و مو</option>
            <option value="pediatrics">کلینیک اطفال</option>
          </select>

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-right text-base"
            style={{ direction: "rtl" }}
          >
            <option value="">انتخاب منطقه</option>
            <option value="north">شمال شهر</option>
            <option value="center">مرکز شهر</option>
            <option value="south">جنوب شهر</option>
            <option value="east">شرق شهر</option>
            <option value="west">غرب شهر</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition flex justify-center items-center gap-2"
        >
          جستجو
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10 18a8 8 0 110-16 8 8 0 010 16z"
            />
          </svg>
        </motion.button>
      </motion.form>

      {/* نمایش Swiper */}
      <div className="max-w-5xl w-full relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          dir="rtl"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
          speed={600}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          style={{ padding: "20px 0" }}
        >
          {sampleClinics.map((clinic) => (
            <SwiperSlide key={clinic.id}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col transition-shadow duration-300"
                style={{ width: "100%", height: 220 }}
              >
                <img
                  src={clinic.image}
                  alt={clinic.title}
                  className="w-full h-36 object-cover"
                  loading="lazy"
                />
                <div className="p-4 flex-grow flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {clinic.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ClinicSearch;

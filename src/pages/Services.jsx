import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion"; // اضافه شد

function Services() {
  const services = [
    {
      title: "مشاوره آنلاین پزشکی",
      description: "دریافت مشاوره از متخصصین بدون نیاز به حضور فیزیکی.",
      image: "/images/service1.jpg",
    },
    {
      title: "خدمات کلینیکی",
      description: "ویزیت حضوری، آزمایشات و خدمات تخصصی پزشکی.",
      image: "/images/service2.jpg",
    },
    {
      title: "خدمات پاراکلینیکی",
      description: "ارائه خدمات تصویربرداری، سونوگرافی، نوار قلب و غیره.",
      image: "/images/service3.jpg",
    },
  ];

  const suggestions = [
    { title: "پکیج زیبایی پوست", img: "/images/skin-care.webp" },
    { title: "مقاله تغذیه سالم", img: "/images/healthy-food.jpg" },
    { title: "ویزیت تخصصی آنلاین", img: "/images/online-visit.jpg" },
    { title: "سلامت روان", img: "/images/mental-health.png" },
    { title: "تست‌های سلامتی خانگی", img: "/images/home-tests.jpg" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mt-10 px-4 pb-20"
      style={{
        background:
          "linear-gradient(to bottom, #fefefe 0%, #d8c9f9 50%, #a49ee9 100%)",
      }}
    >
      {/* Title */}
      <h1 className="text-4xl mt-25 font-extrabold mb-8 text-gray-800">
        <span className="bg-gradient-to-r text-black to-cyan-500 bg-clip-text ">
          خدمات ما
        </span>
      </h1>

      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full max-w-6xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-xl"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] sm:h-[420px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 text-right">
                <h2 className="text-2xl font-bold drop-shadow">{service.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto my-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-2xl p-5 shadow-md hover:shadow-2xl transition duration-300 hover:scale-[1.02] bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-right text-gray-800">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-2 text-right">{service.description}</p>
            <a
              href="#"
              className="text-blue-500 text-sm mt-4 inline-flex items-center gap-1 hover:underline text-right"
            >
              بیشتر بدانید <span>→</span>
            </a>
          </div>
        ))}
      </div>

      {/* Suggestions Slider */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          شاید از این هم خوشتان بیاید
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto px-4"
        >
          {suggestions.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl hover:scale-[1.01]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-10 text-center">
                  <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Services;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/prosthetic1.webp",
    title: "پیش به سوی زندگی دوباره",
    subtitle: "با اندام‌های مصنوعی پیشرفته",
    buttonText: "اطلاعات بیشتر",
    buttonLink: "#",
  },
  {
    image: "/images/Prosthetics2.jpg",
    title: "توانبخشی نوین",
    subtitle: "دوباره حرکت کنید، دوباره زندگی کنید",
    buttonText: "اطلاعات بیشتر",
    buttonLink: "#",
  },
  {
    image: "/images/Orthotics1.png",
    title: "برای هر قدم، آزادی بیشتر",
    subtitle: "با تکنولوژی‌های روز دنیا",
    buttonText: "اطلاعات بیشتر",
    buttonLink: "#",
  },
];

const SliderPhoto = () => (
  <div style={{ position: "relative" }}>
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <img
            src={s.image}
            alt={`slide-${i}`}
            style={{
              width: "100%",
              height: "90vh",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div className="slide-content">
            <h2 className="fade-up">{s.title}</h2>
            <p className="fade-up">{s.subtitle}</p>
            <a
              href={s.buttonLink}
              className="slide-button fade-up"
              style={{
                padding: "14px 32px",
                backgroundColor: "#007BFF",
                color: "#fff",
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: "bold",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
                transition: "all 0.3s ease-in-out",
                marginTop: "80px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0056D2";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#007BFF";
                e.target.style.transform = "translateY(0)";
              }}
            >
              {s.buttonText}
            </a>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-button-prev pl-30" />
      <div className="swiper-button-next pr-30" />
      <div className="swiper-pagination" />
    </Swiper>

    {/* استایل‌ها */}
    <style>{`
      .slide-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-align: center;
        padding: 0 30px;
        border-radius: 10px;
      }

      .slide-content h2 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
      }

      .slide-content p {
        font-size: 1.4rem;
        margin-bottom: 1.8rem;
        font-weight: 300;
        line-height: 1.6;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        max-width: 600px;
        margin: 0 auto;
      }

      /* انیمیشن Fade Up */
      .fade-up {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeUp 1s ease forwards;
      }

      @keyframes fadeUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        font-size: 30px !important;
      }

      .swiper-button-prev,
      .swiper-button-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .swiper-button-prev::before,
      .swiper-button-next::before {
        content: "";
        position: absolute;
        width: 75px;
        height: 75px;
        border: 4px solid #FDFBEE;
        border-radius: 30%;
        background-color: rgba(0, 0, 0,0.5);
        z-index: -1;
      }

      .swiper-button-prev {
        left: 10%;
      }

      .swiper-button-next {
        right: 10%;
      }

      .swiper-pagination {
        bottom: 60px !important;
        display: flex;
        gap: 15px;
        justify-content: center;
      }

      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #5865F2;
        border-radius: 50%;
        opacity: 1;
        margin: 0;
        position: relative;
        transition: all 0.3s ease;
      }

      .swiper-pagination-bullet-active {
        background-color: #7F8CFF;
      }

      .swiper-pagination-bullet-active::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35px;
        height: 35px;
        border: 3px solid #F5F1E9;
        border-radius: 40%;
        transition: all 0.3s ease;
      }

      @media (max-width: 768px) {
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      }
    `}</style>

    <div
      className="w-full h-[100px] text-white flex flex-col items-center justify-center text-center px-4 rounded-md border border-gray-600"
      style={{
        background: "linear-gradient(90deg, #094A7A 0%, #151515 100%)",
      }}
    >
      <p className="text-xl font-semibold">
        پیش به سوی زندگی دوباره، با اندام‌های مصنوعی پیشرفته
      </p>
      <p className="text-sm mt-1 font-light leading-relaxed max-w-4xl mx-auto">
        در کلینیک تخصصی ارتوز و پروتز، با تکیه بر جدیدترین فناوری‌ها و تیمی متخصص، به شما کمک می‌کنیم تا دوباره حرکت کنید و زندگی خود را به دست آورید.
      </p>
    </div>
  </div>
);

export default SliderPhoto;

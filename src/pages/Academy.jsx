import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "دوره آموزش کمک‌های اولیه",
    description: "آموزش مهارت‌های حیاتی کمک‌های اولیه برای مواقع اضطراری.",
    startDate: "1404/06/15",
    capacity: 25,
  },
  {
    id: 2,
    title: "کارگاه تغذیه سالم",
    description: "آموزش برنامه‌ریزی تغذیه برای حفظ سلامت و پیشگیری از بیماری‌ها.",
    startDate: "1404/07/01",
    capacity: 30,
  },
  {
    id: 3,
    title: "دوره تخصصی روانشناسی سلامت",
    description: "آموزش مفاهیم روانشناسی سلامت و تکنیک‌های بهبود کیفیت زندگی.",
    startDate: "1404/07/20",
    capacity: 20,
  },
];

const instructors = [
  {
    id: 1,
    name: "دکتر سارا احمدی",
    specialty: "روانشناسی سلامت",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "دکتر علی رضایی",
    specialty: "تغذیه و رژیم درمانی",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: 3,
    name: "دکتر نازنین محمدی",
    specialty: "پرستاری حرفه‌ای",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "دکتر کامران موسوی",
    specialty: "فیزیوتراپیست ورزشی",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 5,
    name: "دکتر مهسا کریمی",
    specialty: "روان‌درمانگر کودک",
    photo: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: 6,
    name: "دکتر حامد رستگار",
    specialty: "جراح عمومی",
    photo: "https://randomuser.me/api/portraits/men/70.jpg",
  },
];

const faqItems = [
  {
    question: "ثبت‌نام در دوره‌ها چگونه انجام می‌شود؟",
    answer:
      "پس از انتخاب دوره مورد نظر، می‌توانید با استفاده از دکمه ثبت‌نام فرم ثبت‌نام را پر کنید و ثبت‌نام خود را قطعی کنید.",
  },
  {
    question: "آیا دوره‌ها به صورت آنلاین هم برگزار می‌شوند؟",
    answer:
      "بله، برخی از دوره‌ها به صورت آنلاین و برخی حضوری برگزار می‌شوند. نوع دوره در توضیحات هر دوره ذکر شده است.",
  },
  {
    question: "هزینه شرکت در دوره‌ها چقدر است؟",
    answer:
      "هزینه هر دوره در بخش توضیحات دوره ذکر شده است. برخی دوره‌ها رایگان و برخی هزینه‌دار هستند.",
  },
];

export default function AcademySection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <motion.div
      dir="rtl"
      className="max-w-7xl mx-auto px-8 py-25 bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 rounded-3xl shadow-xl select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-5xl font-extrabold mb-12 text-gray-900 text-center tracking-wide">
        آکادمی کلینیک
      </h2>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
        آکادمی کلینیک ما با هدف ارتقای دانش و مهارت‌های تخصصی در حوزه سلامت و پزشکی،
        دوره‌ها و کارگاه‌های کاربردی را برای عموم و متخصصان برگزار می‌کند.
      </p>

      {/* دوره‌ها */}
      <section className="mb-20">
        <h3 className="text-4xl font-semibold mb-8 text-gray-800">دوره‌ها و کارگاه‌ها</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(({ id, title, description, startDate, capacity }) => (
            <div
              key={id}
              tabIndex={0}
              role="button"
              onClick={() => alert(`ثبت‌نام در دوره: ${title}`)}
              onKeyPress={(e) => {
                if (e.key === "Enter") alert(`ثبت‌نام در دوره: ${title}`);
              }}
              className="bg-gradient-to-br h-70 from-purple-100 to-pink-100 rounded-2xl shadow-lg cursor-pointer flex flex-col p-5 transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl outline-none"
            >
              <h4 className="text-xl font-bold text-pink-700 mb-2">{title}</h4>
              <p className="text-pink-900 flex-grow text-xs leading-snug">{description}</p>
              <div className="mt-4 flex justify-between text-pink-800 text-[11px] font-medium tracking-wide">
                <span>
                  شروع: <span className="font-semibold">{startDate}</span>
                </span>
                <span>
                  ظرفیت: <span className="font-semibold">{capacity} نفر</span>
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`ثبت‌نام در دوره: ${title}`);
                }}
                className="mt-4 bg-pink-600 text-white py-1.5 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-sm hover:shadow-md text-sm"
              >
                ثبت‌نام
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* اساتید */}
      <section className="mb-20">
        <h3 className="text-4xl font-semibold mb-8 text-gray-800">اساتید ما</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {instructors.map(({ id, name, specialty, photo }) => (
            <div
              key={id}
              className="flex flex-col items-center bg-gradient-to-tr from-white to-gray-100 rounded-2xl shadow-md p-5 hover:shadow-xl transition cursor-default"
            >
              <img
                src={photo}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <h4 className="text-lg font-bold text-gray-800 mb-1">{name}</h4>
              <p className="text-gray-600 text-sm">{specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* سوالات متداول */}
      <section className="mb-24">
        <h3 className="text-4xl font-semibold mb-10 text-gray-800 text-center">
          سوالات متداول
        </h3>
        <div className="max-w-4xl mx-auto space-y-5">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`group p-5 border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300 cursor-pointer ${
                openFAQ === index ? "bg-indigo-50" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700 select-none">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-pink-600 transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <AnimatePresence initial={false}>
                {openFAQ === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

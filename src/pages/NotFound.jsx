// src/components/NotFound404.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function NotFound404() {
  const { scrollY } = useViewportScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, 60]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-700 via-slate-800 to-black flex items-center justify-center p-4">
      {/* پس‌زمینه پارالاکس */}
      <motion.img
        src="/images/404-error-abstract-concept-vector-illustration_107173-25730.avif"
        alt="خطای ۴۰۴"
        style={{ y: yOffset }}
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* کادر محتوا */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full text-center"
      >
        {/* آیکون یا تصویر داخل باکس */}
        <div className="mb-6">
          <img
            src="/images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif"
            alt="صفحه یافت نشد"
            className="w-28 mx-auto"
          />
        </div>

        <h1 className="text-7xl font-extrabold text-blue-900 mb-3">۴۰۴</h1>

        <p dir="rtl" className="text-xl text-gray-800 mb-6 text-center leading-relaxed">
          متأسفانه صفحه‌ای که به دنبال آن هستید، یافت نشد.
        </p>

        <Link to="/" className="inline-block">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-700 text-white text-lg font-bold rounded-full shadow-xl hover:bg-blue-800 cursor-pointer transition"
          >
            بازگشت به صفحه اصلی
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

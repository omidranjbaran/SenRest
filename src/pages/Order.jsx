import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Order() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    deliveryDate: "",
    deliveryTime: "",
    notes: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "نام و نام خانوادگی الزامی است";
    if (!formData.phone.trim()) {
      newErrors.phone = "شماره تماس الزامی است";
    } else if (!/^09\d{9}$/.test(formData.phone)) {
      newErrors.phone = "شماره تماس معتبر نیست (مثال: 09123456789)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "ایمیل الزامی است";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "ایمیل معتبر نیست";
    }
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = "تاریخ ارسال الزامی است";
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.deliveryDate);
      if (selectedDate < new Date(today.toISOString().split("T")[0])) {
        newErrors.deliveryDate = "تاریخ ارسال نمی‌تواند قبل از امروز باشد";
      }
    }
    if (!formData.deliveryTime) newErrors.deliveryTime = "زمان ارسال الزامی است";
    if (!formData.agreeTerms) newErrors.agreeTerms = "پذیرش قوانین الزامی است";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        deliveryDate: "",
        deliveryTime: "",
        notes: "",
        agreeTerms: false,
      });
    }, 1500);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-200 via-indigo-50 to-indigo-200 px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="shadow-2xl rounded-3xl max-w-3xl w-full p-12 bg-gradient-to-br from-indigo-100 via-white to-indigo-100"
      >
        <h1 className="text-5xl font-extrabold mb-10 text-center text-indigo-700 select-none">
          ثبت سفارش
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-5">
            <label htmlFor="fullName" className="block mb-1 font-semibold text-gray-700">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              className={`w-full p-3 border rounded-xl text-lg focus:outline-none focus:ring-2 ${
                errors.fullName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"
              }`}
              dir="rtl"
            />
            {errors.fullName && <p className="text-red-600 mt-1 text-sm">{errors.fullName}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="block mb-1 font-semibold text-gray-700">
              شماره تماس
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="مثال: 09123456789"
              className={`w-full p-3 border rounded-xl text-lg focus:outline-none focus:ring-2 ${
                errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"
              }`}
              dir="ltr"
            />
            {errors.phone && <p className="text-red-600 mt-1 text-sm">{errors.phone}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className={`w-full p-3 border rounded-xl text-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"
              }`}
              dir="ltr"
            />
            {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="deliveryDate" className="block mb-1 font-semibold text-gray-700">
              تاریخ ارسال
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              className={`w-full p-3 border rounded-xl text-lg focus:outline-none focus:ring-2 ${
                errors.deliveryDate ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"
              }`}
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.deliveryDate && <p className="text-red-600 mt-1 text-sm">{errors.deliveryDate}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="deliveryTime" className="block mb-1 font-semibold text-gray-700">
              زمان ارسال
            </label>
            <input
              type="time"
              id="deliveryTime"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleChange}
              className={`w-full p-3 border rounded-xl text-lg focus:outline-none focus:ring-2 ${
                errors.deliveryTime ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"
              }`}
              min="09:00"
              max="17:00"
              step="900"
            />
            {errors.deliveryTime && <p className="text-red-600 mt-1 text-sm">{errors.deliveryTime}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="notes" className="block mb-1 font-semibold text-gray-700">
              توضیحات (اختیاری)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              placeholder="در صورت نیاز توضیح دهید"
              className="w-full p-3 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="mb-7 flex items-center gap-3">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className={`w-5 h-5 cursor-pointer ${
                errors.agreeTerms ? "border-red-500" : "border-gray-300"
              }`}
            />
            <label htmlFor="agreeTerms" className="text-gray-700 select-none">
              من قوانین و سیاست‌های حفظ حریم خصوصی را می‌پذیرم
            </label>
          </div>
          {errors.agreeTerms && <p className="text-red-600 mb-5 text-sm">{errors.agreeTerms}</p>}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-3xl transition-colors duration-300 ${
              loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
            }`}
          >
            {loading ? "در حال ارسال..." : "ثبت سفارش"}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-green-600 font-semibold text-center"
            >
              سفارش شما با موفقیت ثبت شد!
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
}

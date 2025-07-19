import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdAccessTime, MdPhone, MdLocationOn } from "react-icons/md";

function ContactInfoCard({ icon, label, value, href }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-default select-text">
      <div className="flex-shrink-0 text-indigo-600 text-3xl">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-indigo-700">{label}</span>
        {href ? (
          <a href={href} className="text-indigo-900 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <span className="text-indigo-900 font-medium">{value}</span>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "نام الزامی است";
    if (!formData.lastName.trim()) newErrors.lastName = "نام خانوادگی الزامی است";
    if (!formData.email.trim()) {
      newErrors.email = "ایمیل الزامی است";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "ایمیل معتبر نیست";
    }
    if (!formData.message.trim()) newErrors.message = "متن پیام الزامی است";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", address: "", message: "" });
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-tr from-purple-300 via-pink-300 to-yellow-200 flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-10 flex flex-col"
      >
        {/* بخش بالایی: دو ستون اطلاعات تماس و فرم */}
        <div className="md:flex md:gap-10">
          {/* سمت راست: اطلاعات تماس */}
          <div className="md:w-1/3 order-2 md:order-1 m-10 flex flex-col gap-8 text-indigo-900">
            <h2 className="text-4xl font-extrabold tracking-tight drop-shadow-md">تماس با سنرست </h2>
            <p className="text-base leading-relaxed text-indigo-800/90 max-w-md">
              سوالات خود را از طریق فرم مقابل ارسال کنید یا از راه‌های زیر با ما در ارتباط باشید.
            </p>
            <div className="space-y-6">
              <ContactInfoCard icon={<MdEmail />} label="ایمیل" value="info@narest.com" href="mailto:info@narest.com" />
              <ContactInfoCard icon={<MdAccessTime />} label="ساعات کاری" value="شنبه تا چهارشنبه، ۹ صبح تا ۵ بعدازظهر" />
              <ContactInfoCard icon={<MdPhone />} label="تلفن" value="۰۱-۱۲۳۴۵۶۷۸" href="tel:+982112345678" />
              <ContactInfoCard icon={<MdLocationOn />} label="آدرس" value="اصفهان، دولت آیاد، پلاک ۱۲۳، طبقه ۴" />
            </div>
          </div>

          {/* سمت چپ: فرم ارسال پیام */}
          <div className="md:w-2/3 mt-10 order-1 md:order-2">
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center drop-shadow-sm">
                ارسال پیام
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 font-medium text-gray-700">
                    نام
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 transition focus:outline-none focus:ring-4 ${
                      errors.firstName
                        ? "border-red-600 focus:ring-red-400 bg-red-50"
                        : "border-gray-300 focus:ring-indigo-400 bg-white"
                    }`}
                    placeholder="نام خود را وارد کنید"
                    dir="rtl"
                    autoComplete="given-name"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 mt-1 text-sm font-semibold">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block mb-2 font-medium text-gray-700">
                    نام خانوادگی
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 transition focus:outline-none focus:ring-4 ${
                      errors.lastName
                        ? "border-red-600 focus:ring-red-400 bg-red-50"
                        : "border-gray-300 focus:ring-indigo-400 bg-white"
                    }`}
                    placeholder="نام خانوادگی خود را وارد کنید"
                    dir="rtl"
                    autoComplete="family-name"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 mt-1 text-sm font-semibold">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-3 transition focus:outline-none focus:ring-4 ${
                    errors.email
                      ? "border-red-600 focus:ring-red-400 bg-red-50"
                      : "border-gray-300 focus:ring-indigo-400 bg-white"
                  }`}
                  placeholder="example@mail.com"
                  dir="ltr"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-600 mt-1 text-sm font-semibold">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block mb-2 font-medium text-gray-700">
                  آدرس
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-indigo-400 bg-white transition"
                  placeholder="آدرس خود را وارد کنید"
                  dir="rtl"
                  autoComplete="street-address"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  متن پیام
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full rounded-lg border px-4 py-3 transition focus:outline-none focus:ring-4 ${
                    errors.message
                      ? "border-red-600 focus:ring-red-400 bg-red-50"
                      : "border-gray-300 focus:ring-indigo-400 bg-white"
                  }`}
                  placeholder="متن پیام خود را بنویسید..."
                  dir="rtl"
                />
                {errors.message && (
                  <p className="text-red-600 mt-1 text-sm font-semibold">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-2xl shadow-lg transition-shadow"
              >
                ارسال پیام
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 text-center text-green-600 font-semibold text-lg"
                >
                  پیام شما با موفقیت ارسال شد!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* نقشه زیر دو ستون بالا */}
        <div className="mt-10 w-full bg-gray-100 rounded-2xl shadow-inner p-2">
          <iframe
            title="نقشه نرست"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.325278480876!2d51.3890203!3d35.6891985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfb15a145fc3f%3A0xb7eae4b48f7b3e43!2sTehran%2C%20Iran!5e0!3m2!1sen!2sus!4v1684972454321!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </div>
  );
}

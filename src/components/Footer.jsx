import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-white bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900">
      <div className="max-w-screen-lg mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:flex md:flex-row-reverse">
        {/* درباره ما */}
        <div className="text-right md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">درباره ما</h3>
          <p className="text-sm leading-relaxed">
            مرکز تخصصی پروتز و ارتوز با بیش از ۲۰ سال تجربه، خدمات نوآورانه و شخصی‌سازی‌شده ارائه می‌دهد.
          </p>
        </div>

 
        <div className="text-right md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">لینک‌های سریع</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="hover:underline">خدمات ما</a></li>
            <li><a href="/about" className="hover:underline">درباره مرکز</a></li>
            <li><a href="/faq" className="hover:underline">سؤالات متداول</a></li>
            <li><a href="/contact" className="hover:underline">تماس با ما</a></li>
            <li><a href="/sitemap" className="hover:underline">نقشه سایت</a></li>
          </ul>
        </div>


        <div className="text-right md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">تماس با ما</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-end items-center">
              <FaMapMarkerAlt className="ml-2" />
              اصفهان، خیابان انقلاب، پلاک ۱۲۳
            </li>
            <li className="flex justify-end items-center">
              <FaPhoneAlt className="ml-2" />
              <a href="tel:+983112345678" className="hover:underline">۰۱-۱۲۳۴۵۶۷۸</a>
            </li>
            <li className="flex justify-end items-center">
              <FaEnvelope className="ml-2" />
              <a href="mailto:info@ortho-prosthesis.ir" className="hover:underline">info@ortho-prosthesis.ir</a>
            </li>
          </ul>
          <div className="mt-4 flex justify-end space-x-reverse gap-2">
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-900 text-white"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 text-white"><FaInstagram /></a>
            <a href="#" className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-600 mt-5 pt-5">
        <div className="max-w-screen-lg mx-auto pb-3 px-4 text-sm text-center">
          © {new Date().getFullYear()} مرکز پروتز و ارتوز. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}

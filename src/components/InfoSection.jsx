import React from 'react';
import DividerWithIcon from '../components/DividerWithIcon';
import { FaMapMarkerAlt } from 'react-icons/fa';

function InfoSection() {
  const orthosisDescription = "اورتوزها دستگاه‌های پزشکی هستند که برای حمایت، اصلاح یا محافظت از قسمت‌های مختلف بدن استفاده می‌شوند. این ابزارها می‌توانند به اصلاح وضعیت بدن کمک کنند، از آسیب‌ها جلوگیری کنند یا روند درمان بعد از جراحی و آسیب‌ها را تسریع نمایند. اورتوزها معمولاً برای حمایت از مفاصل، استخوان‌ها یا عضلات طراحی می‌شوند و می‌توانند به ویژه برای افرادی که مشکلات اسکلتی و حرکتی دارند، مفید واقع شوند. این دستگاه‌ها به طور ویژه برای بیماران با مشکلاتی مانند انحرافات ستون فقرات، آسیب‌های زانو، مچ پا و شانه طراحی می‌شوند.";

  const prosthesisDescription = "پروتزها دستگاه‌های پزشکی هستند که برای جایگزینی اندام‌های از دست رفته یا غیرعملی طراحی می‌شوند. این ابزارها به افراد کمک می‌کنند تا عملکردهای از دست رفته بدن خود را دوباره بدست آورند و قادر به انجام فعالیت‌های روزمره خود شوند. پروتزها می‌توانند شامل دست‌ها، پاها، اندام‌های مصنوعی یا دیگر اجزای بدن باشند. استفاده از پروتز به افراد امکان می‌دهد که کیفیت زندگی خود را بهبود بخشند و در بسیاری از مواقع، باعث بازگشت به زندگی فعال و مستقل می‌شود. این تکنولوژی پیشرفته به افراد این امکان را می‌دهد که به طور کامل یا تا حد زیادی به زندگی روزمره خود بازگردند.";

  return (
    <div className="space-y-5 px-4 sm:px-6 md:px-10">
      {/* ردیف اول */}
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-10">
        <div className="flex flex-col sm:w-full md:w-auto md:flex-row justify-center items-center gap-10 md:gap-40">
          {/* بخش عکس */}
          <div className="sm:mx-auto md:flex-shrink-0 md:ml-30">
            <img 
              src="/images/product11.png" 
              alt="Orthosis"
              className="w-full max-w-[200px] md:max-w-[200px] h-auto object-cover rounded-lg"
            />
          </div>

          {/* بخش متن */}
          <div className="sm:mx-auto md:flex-grow mb-12">
            <h2 className="text-2xl font-semibold text-right md:text-center sm:text-center">اورتوز: راهی برای حمایت و بهبود عملکرد بدن</h2>

            <p className="mt-4 text-gray-600 text-lg line-clamp-3 sm:text-center" style={{ direction: 'rtl' }}>
              {orthosisDescription}
            </p>

            <button className="mt-4 px-4 py-2 cursor-pointer bg-[#0E76BC] text-white rounded-full hover:bg-blue-700 mx-auto md:mx-0 block w-fit">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>

      {/* خط جداکننده */}
      <div className="border-t border-gray-300 mx-14"></div>

      {/* ردیف دوم */}
      <div className="flex flex-wrap md:ml-15 md:flex-nowrap justify-center md:justify-between items-center gap-10">
        <div className="flex flex-col sm:w-full md:w-auto md:flex-row justify-center items-center gap-10">
          {/* بخش متن */}
          <div className="sm:mx-auto flex-grow mb-12 order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-right md:text-center sm:text-center">پروتز: بازسازی عملکرد و کیفیت زندگی</h2>

            <p className="mt-4 text-gray-600 text-lg line-clamp-3 sm:text-center" style={{ direction: 'rtl' }}>
              {prosthesisDescription}
            </p>

            <button className="mt-4 px-4 py-2 cursor-pointer  bg-[#0E76BC] text-white rounded-full hover:bg-blue-700 mx-auto md:mx-0 block w-fit">
              اطلاعات بیشتر
            </button>
          </div>

          {/* بخش عکس */}
          <div className="sm:mx-auto md:flex-shrink-0 md:mr-15 order-1 md:order-2">
            <img 
              src="/images/product22.png" 
              alt="Prosthetic"
              className="w-full max-w-[350px] md:max-w-[400px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <DividerWithIcon Icon={FaMapMarkerAlt} />
    </div>
  );
}

export default InfoSection;

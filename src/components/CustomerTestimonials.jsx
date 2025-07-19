import React from 'react';
import DividerWithIcon from './DividerWithIcon';
import { BsChatDots } from 'react-icons/bs';         
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const testimonials = [
  {
    id: 1,
    text: `این کلینیک فوق‌العاده بود! خدمات عالی و پرسنل بسیار دلسوز و حرفه‌ای داشت.  
    من از ابتدا تا انتهای روند درمان تحت حمایت کامل قرار گرفتم و هر سوالی داشتم با حوصله پاسخ داده شد.  
    مطمئناً دوباره به اینجا بازمی‌گردم و به همه دوستان و آشنایانم توصیه می‌کنم.`,
    name: 'علی رضایی',
    province: 'تهران',
  },
  {
    id: 2,
    text: `من خیلی راضی بودم از خدمات. از لحظه ورود گرم استقبال شدم و فضا واقعاً آرام‌بخش بود.  
    دکتر و پرستاران جزئیات درمان را برایم توضیح دادند و بعد از اتمام کار هم پیگیری کردند تا مطمئن شوند همه‌چیز مرتب است.  
    هرگز چنین تجربه حرفه‌ای و صمیمانه‌ای نداشتم!`,
    name: 'سارا احمدی',
    province: 'اصفهان',
  },
  {
    id: 3,
    text: `بسیار حرفه‌ای و تمیز. ممنون از تیم سنرست که با دقت و دلسوزی کار کردند.  
    تجهیزات به‌روز و شرایط بهداشتی در بالاترین سطح بود.  
    حتماً برای هرگونه خدمات بعدی دوباره اینجا خواهم آمد.`,
    name: 'مهدی مرادی',
    province: 'شیراز',
  },
];

const CustomerTestimonials = () => {
  return (
    <div className="w-full relative py-10 bg-white">
      <DividerWithIcon Icon={BsChatDots} className="-mt-10  fill-current " />

      <h2 className="text-2xl font-semibold my-8 text-center">نظرات مشتریان</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {testimonials.map(({ id, text, name, province }) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col items-center max-w-screen-md mx-auto">
              <p className="text-lg mb-4 px-5">{text}</p>
              <img src="images/line.png" alt="divider" className="mx-auto my-5 " style={{ width: '400px' }} />
              <p className="font-semibold mb-8 relative top-5 ">{name} – {province}</p>
            </div>
          </SwiperSlide>
        ))}
            <div
            className="custom-prev hidden lg:flex lg:left-15 absolute top-9 xl:left-50 transform -translate-y-1/2 text-black p-3 rounded-full cursor-pointer hover:bg-blue-500 border-3 shadow-lg z-20"
            >
            <AiOutlineArrowLeft size={24} />
            </div>
            <div
            className="custom-next hidden lg:flex lg:right-15 absolute top-9 xl:right-50 transform -translate-y-1/2 text-black p-3 rounded-full cursor-pointer hover:bg-blue-500 border-3 shadow-lg z-20"
            >
            <AiOutlineArrowRight size={24} />
            </div>
      </Swiper>

 
    </div>
  );
};

export default CustomerTestimonials;

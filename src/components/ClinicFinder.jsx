import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi'

const provinces = [
  'آذربایجان شرقی', 'آذربایجان غربی', 'اردبیل', 'اصفهان', 'البرز', 'ایلام', 'بوشهر', 'تهران',
  'چهارمحال و بختیاری', 'خراسان جنوبی', 'خراسان رضوی', 'خراسان شمالی', 'خوزستان', 'زنجان',
  'سمنان', 'سیستان و بلوچستان', 'فارس', 'قزوین', 'قم', 'کردستان', 'کرمان', 'کرمانشاه', 'کهگیلویه و بویراحمد',
  'گلستان', 'گیلان', 'لرستان', 'مازندران', 'مركزی', 'هرمزگان', 'همدان', 'یزد'
];

const cities = {
  'آذربایجان شرقی': ['تبریز', 'مراغه', 'مرند', 'اهر', 'شبستر', 'میانه', 'بناب', 'هریس'],
  'آذربایجان غربی': ['ارومیه', 'خوی', 'مهاباد', 'بوکان', 'سلماس', 'میاندوآب', 'نقده'],
  'اردبیل': ['اردبیل', 'مشگین‌شهر', 'پارس‌آباد', 'خلخال', 'سرعین'],
  'اصفهان': ['اصفهان', 'کاشان', 'نجف‌آباد', 'خمینی‌شهر', 'شاهین‌شهر', 'فلاورجان', 'زرین‌شهر'],
  'البرز': ['کرج', 'نظرآباد', 'طالقان', 'اشتهارد', 'ماهدشت'],
  'ایلام': ['ایلام', 'دهلران', 'آبدانان', 'مهران', 'دره‌شهر'],
  'بوشهر': ['بوشهر', 'دشتستان', 'گناوه', 'کنگان', 'عسلویه', 'دیلم'],
  'تهران': ['تهران', 'ری', 'شهریار', 'اسلامشهر', 'ورامین', 'پردیس', 'دماوند'],
  'چهارمحال و بختیاری': ['شهرکرد', 'بروجن', 'فارسان', 'لردگان', 'سامان'],
  'خراسان جنوبی': ['بیرجند', 'قائن', 'فردوس', 'نهبندان', 'طبس'],
  'خراسان رضوی': ['مشهد', 'سبزوار', 'نیشابور', 'تربت‌حیدریه', 'کاشمر', 'چناران'],
  'خراسان شمالی': ['بجنورد', 'شیروان', 'اسفراین', 'جاجرم', 'فاروج'],
  'خوزستان': ['اهواز', 'آبادان', 'خرمشهر', 'ماهشهر', 'دزفول', 'اندیمشک', 'شادگان'],
  'زنجان': ['زنجان', 'ابهر', 'خرمدره', 'ماهنشان', 'ایجرود'],
  'سمنان': ['سمنان', 'شاهرود', 'دامغان', 'گرمسار', 'مهدیشهر'],
  'سیستان و بلوچستان': ['زاهدان', 'چابهار', 'ایرانشهر', 'خاش', 'سراوان', 'نیک‌شهر'],
  'فارس': ['شیراز', 'مرودشت', 'کازرون', 'جهرم', 'فسا', 'لار', 'نی‌ریز'],
  'قزوین': ['قزوین', 'البرز', 'آبیک', 'تاکستان', 'بوئین‌زهرا'],
  'قم': ['قم'],
  'کردستان': ['سنندج', 'سقز', 'بانه', 'مریوان', 'قروه', 'بیجار'],
  'کرمان': ['کرمان', 'رفسنجان', 'سیرجان', 'جیرفت', 'بم', 'زرند'],
  'کرمانشاه': ['کرمانشاه', 'اسلام‌آباد غرب', 'هرسین', 'سنقر', 'قصرشیرین'],
  'کهگیلویه و بویراحمد': ['یاسوج', 'دهدشت', 'گچساران', 'بهمئی'],
  'گلستان': ['گرگان', 'گنبد کاووس', 'علی‌آباد', 'کردکوی', 'آق‌قلا'],
  'گیلان': ['رشت', 'انزلی', 'لاهیجان', 'لنگرود', 'آستارا', 'رودسر'],
  'لرستان': ['خرم‌آباد', 'بروجرد', 'دورود', 'الیگودرز', 'ازنا', 'پلدختر'],
  'مازندران': ['ساری', 'آمل', 'بابل', 'قائم‌شهر', 'تنکابن', 'نکا'],
  'مركزی': ['اراک', 'ساوه', 'خمین', 'محلات', 'شازند'],
  'هرمزگان': ['بندرعباس', 'قشم', 'بندرلنگه', 'میناب', 'جاسک'],
  'همدان': ['همدان', 'ملایر', 'نهاوند', 'تویسرکان', 'رزن', 'بهار'],
  'یزد': ['یزد', 'میبد', 'اردکان', 'بافق', 'مهریز']
};

const ClinicFinder = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [clinics] = useState([
    { id: 1, name: 'کلینیک 1', image: 'clinic1.jpg' },
    { id: 2, name: 'کلینیک 2', image: 'clinic2.jpg' },
    { id: 3, name: 'کلینیک 3', image: 'clinic3.jpg' },
    { id: 4, name: 'کلینیک 4', image: 'clinic4.jpg' },
    { id: 5, name: 'کلینیک 5', image: 'clinic5.jpg' },
    { id: 6, name: 'کلینیک 6', image: 'clinic6.jpg' },
    { id: 7, name: 'کلینیک 7', image: 'clinic7.jpg' }
  ]);

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSearch = () => {
    alert('جستجو انجام شد');
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">کلینیک‌های مورد تایید سنرست</h2>

      {/* با responsive */}
      <div className="flex sm:flex-row-reverse  flex-col divide-y sm:divide-y-0 sm:divide-x-reverse gap-4 mb-6  items-center">
        <select
          value={selectedProvince}
          onChange={handleProvinceChange}
          className="p-2 border border-gray-300 rounded-md w-48"
        >
          <option value="" disabled>انتخاب استان</option>
          {provinces.map((province) => (
            <option key={province} value={province}>{province}</option>
          ))}
        </select>

        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="p-2 border border-gray-300 rounded-md w-48"
          disabled={!selectedProvince}
        >
          <option value="" disabled>انتخاب شهر</option>
          {selectedProvince && cities[selectedProvince] && cities[selectedProvince].map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <button 
          onClick={handleSearch} 
          className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-green-600"
        >
          جستجو
        </button>
      </div>


      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {clinics.map((clinic) => (
          <div key={clinic.id} className="text-center w-20">
            <div className="w-20 h-20 rounded-full bg-blue-500 mx-auto mb-2 flex items-center justify-center text-white font-bold">
              {clinic.name.charAt(0)}
            </div>
            <p className="text-sm">{clinic.name}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ClinicFinder;

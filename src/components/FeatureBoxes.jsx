import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaHandshake, FaCogs } from 'react-icons/fa';

function FeatureBox({ title, description, Icon }) {
  return (
    <div
      className="bg-white w-[320px] h-[240px] rounded-lg shadow-md flex flex-col items-center p-4 relative
        transform transition duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl hover:-translate-y-1"
      style={{ userSelect: 'none', cursor: 'default' }}
    >
      {/* آیکون */}
      <div className="w-16 h-16 bg-[#363636] rounded-full flex items-center justify-center -mt-12">
        <Icon size={32} color="white" />
      </div>

      {/* عنوان */}
      <p className="mt-6 text-lg font-semibold">{title}</p>

      {/* متن توضیحی */}
      <p
        className="mt-2 text-sm text-center text-gray-600 line-clamp-4"
        style={{ direction: 'rtl', overflow: 'hidden', textOverflow: 'ellipsis', userSelect: 'none', cursor: 'default' }}
      >
        {description}
      </p>

      {/* خط جداکننده */}
      <span className="px-[38px] h-1 bg-[#363636] mt-auto"></span>
    </div>
  );
}

function FeatureBoxes() {
  const description =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز';

  return (
    <div className="relative w-full">
      <img src="images/arrow.png" alt="" className="absolute  -top-3 left-1/2 transform -translate-x-1/2" />
      <div className="bg-[#0E76BC] min-h-[370px] flex flex-wrap justify-center items-center gap-[40px]  p-9 pt-[40px]">
        <FeatureBox title="مشاوره و همکاری" description={description} Icon={FaHandshake} />
        <FeatureBox title="تولید" description={description} Icon={FaCogs} />
        <FeatureBox title="توسعه و فن‌آوری" description={description} Icon={FaLaptopCode} />
        <FeatureBox title="آمــوزش" description={description} Icon={FaGraduationCap} />
      </div>
    </div>
  );
}

export default FeatureBoxes;

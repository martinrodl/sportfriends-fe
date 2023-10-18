import { useEffect } from 'react';

import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';

const slides = [
  { id: 1, img: slide1 },
  { id: 2, img: slide2 },
  { id: 3, img: slide3 },
];

const Slider = ({ index, setIndex }) => {
  const { id, img } = slides[index];

  useEffect(() => {
    let slider = setInterval(() => {
      if (index === slides.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3500);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="hidden md:flex flex-col justify-center h-full ">
      <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[550px] flex w-full overflow-hidden z-1 py-5 sm:py-10 md:py-12">
        <div className="max-w-[513px] px-5" key={'slider-image-' + id}>
          <div className="max-w-[500px]">
            <img src={img} alt="slide" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[16px] max-w-[429px] px-8 w-full z-1">
        {slides.map((_, PaginatioIndex) => {
          return (
            <button
              onClick={() => setIndex(PaginatioIndex)}
              className={`${
                PaginatioIndex === index ? 'bg-[#F2B619]' : 'bg-[#DADADA]'
              } w-full h-[7px] cursor-pointer rounded-[10px]`}
              key={PaginatioIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

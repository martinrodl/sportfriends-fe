import { useEffect, useState } from 'react';

import slide1 from './assets/images/slide1.png';
import slide2 from './assets/images/slide2.png';
import slide3 from './assets/images/slide3.png';

const Slider = () => {
  const [people, setPeople] = useState(slides);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (people != undefined) {
      const lastIndex = people.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3500);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[550px] flex w-full overflow-hidden  z-40 py-5 sm:py-10 md:py-12">
        {people.map((slide, personIndex) => {
          const { id, img } = slide;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (people != undefined) {
            if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
              position = 'lastSlide';
            }
          }
          return (
            <div className={`${position} max-w-[513px] px-5`} key={'slider-image-' + id}>
              <div className="max-w-[500px]">
                <img src={img} alt="slide" />
              </div>
            </div>
          );
        })}
        {/* pagination */}
      </div>
      <div className="grid grid-cols-3 gap-[16px] inset-x-0 mx-auto  max-w-[429px] px-8  w-full  z-50">
        {people.map((pagination, PaginatioIndex) => {
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

const slides = [
  { id: 1, img: slide1 },
  { id: 2, img: slide2 },
  { id: 3, img: slide3 },
];

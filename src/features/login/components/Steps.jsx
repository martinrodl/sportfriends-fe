import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';

const slides = [
  {
    id: 1,
    mobileTitle: 'Let’s Get You Started',
    img: slide1,
    title: 'Find friends for your favourite sports ',
    desc: 'Lorem ipsum dolor sit amet, consecte adipiscing elit.',
  },
  {
    id: 2,
    mobileTitle: 'A bit more info please...',
    img: slide2,
    title: 'Easy organize sport event in your city',
    desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ',
  },
  {
    id: 3,
    mobileTitle: 'Jazz up you profile',
    img: slide3,
    title: 'Find easy your favourite sport',
    desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ',
  },
];

const Steps = ({ setIndex, index }) => {
  const { id, img, title, desc, mobileTitle } = slides[index];

  return (
    <>
      <div className="hidden md:flex flex-col justify-center h-full">
        <div
          className={`relative min-h-[510px] md:min-h-[650px] flex w-full items-center overflow-hidden  z-1 pt-12 md:py-12`}
        >
          <div className={`max-w-[513px] px-5 flex flex-col text-center`} key={'slider-card' + id}>
            <h3 className="text-[28px] md:hidden block md:relative text-center mx-auto  max-w-max md:text-[38px] text-primary font-semibold mb-[18px]">
              {mobileTitle}
            </h3>
            <div className="md:max-w-none max-w-[350px] mx-auto">
              <img src={img} alt="slide" />
            </div>
            <div>
              <h3 className="font-semibold md:text-[24px] my-3">{title}</h3>
              <p className="md:text-lg font-medium text-[#9A9A9A]">{desc}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[11px] md:grid grid-cols-3 md:relative absolute bottom-[36px] md:gap-[16px] md:mt-8 max-w-[82px] md:max-w-[429px] md:px-8  w-full  z-1">
          {slides.map((_, PaginatioIndex) => {
            return (
              <button
                onClick={() => setIndex(PaginatioIndex)}
                className={`${
                  PaginatioIndex === index ? 'bg-[#F2B619] w-[38.33px] md:w-auto' : 'bg-[#DADADA] w-[10px] md:w-auto'
                }  h-[10px] md:h-[7px] transition-all duration-300 cursor-pointer rounded-full`}
                key={PaginatioIndex}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Steps;

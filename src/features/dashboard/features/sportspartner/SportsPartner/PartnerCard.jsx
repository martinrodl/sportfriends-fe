import React from "react";

const PartnerCard = () => {
  return (
    <div>
      <div className="w-full bg-[#FAFAFA] shadow-xl rounded-md mb-12">
        <div className="px-4 md:px-16 py-12">
          <div className="md:grid md:grid-cols-5 block">
            <div className="flex self-center justify-center md:mb-0 mb-6">
              <img src="/imgs/avatar.png" />
            </div>
            <div className="px-10 col-span-3 flex flex-col self-center">
              <h1 className="md:text-left text-center text-base md:text-2xl font-bold text-[#000] md:pb-4">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="md:text-left text-center text-[12px] md:text-xl font-normal text-[#9A9A9A] py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                cras consequat Lorem ipsum{" "}
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-[12px] md:text-xl font-normal text-black ">
                Football
              </h1>
              <div className="flex justify-center  my-6">
                <a className="bg-primary text-white rounded-full md:min-w-[148px] md:min-h-[43px] min-w-[120px] min-h-[35px] text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg">
                  Send
                </a>
              </div>
              <div className="flex justify-center gap-2">
                <img src="/imgs/placeholder 1.svg" />
                <a className="text-[14px] md:text-2xl font-medium text-[#E50027]">
                  Barca
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAFAFA] shadow-xl rounded-md mb-12">
        <div className="px-4 md:px-16 py-12">
          <div className="md:grid md:grid-cols-5 block">
            <div className="flex self-center justify-center md:mb-0 mb-6">
              <img src="/imgs/avatar.png" />
            </div>
            <div className="px-10 col-span-3 flex flex-col self-center">
              <h1 className="md:text-left text-center text-base md:text-2xl font-bold text-[#000] md:pb-4">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="md:text-left text-center text-[12px] md:text-xl font-normal text-[#9A9A9A] py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                cras consequat Lorem ipsum{" "}
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-[12px] md:text-xl font-normal text-black ">
                Football
              </h1>
              <div className="flex justify-center  my-6">
                <a className="bg-primary text-white rounded-full md:min-w-[148px] md:min-h-[43px] min-w-[120px] min-h-[35px] text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg">
                  Send
                </a>
              </div>
              <div className="flex justify-center gap-2">
                <img src="/imgs/placeholder 1.svg" />
                <a className="text-[14px] md:text-2xl font-medium text-[#E50027]">
                  Barca
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;

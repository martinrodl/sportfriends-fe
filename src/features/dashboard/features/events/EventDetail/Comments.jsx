import React from "react";

const Comments = () => {
  return (
    <div className="w-full px-10 py-10">
      <div className="md:grid md:grid-cols-2 block justify-center gap-10">
        <div>
          {data.map((item, index) => {
            return (
              <div className="md:flex hidden gap-x-7 mb-4" key={index}>
                <img src={item.pic} alt="" />
                <span className="text-base text-[#0A043C] font-semibold flex self-center">
                  {item.userName}
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-2xl font-normal text-black mb-10">Comments</h1>
          <div className="max-w-[335px]">
            {commentData.map((item, index) => {
              return (
                <div key={index} className="mb-8 ">
                  <p className="text-sm text-[#9A9A9A] font-normal mb-3">
                    {item.description}
                  </p>
                  <div className="flex justify-end gap-x-1">
                    <span className="text-[#9A9A9A] text-[10px] font-normal md:flex hidden">
                      {item.date}
                    </span>
                    <span className="text-[#9A9A9A] text-[10px] font-normal md:flex hidden">
                      -
                    </span>
                    <span className="text-[#9A9A9A] text-[10px] font-normal md:flex hidden">
                      {item.userName}
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end">
              <a className="bg-primary text-white rounded-full min-w-[133px] min-h-[38px] text-center transition-all cursor-pointer flex items-center justify-center duration-300 hover:shadow-lg">
                Comment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
const data = [
  {
    userName: "Denney Smith",
    pic: "/imgs/Ellipse 53.svg",
  },
  {
    userName: "Denney Smith",
    pic: "/imgs/Ellipse 53.svg",
  },
  {
    userName: "Denney Smith",
    pic: "/imgs/Ellipse 53.svg",
  },
  {
    userName: "Denney Smith",
    pic: "/imgs/Ellipse 53.svg",
  },
  {
    userName: "Denney Smith",
    pic: "/imgs/Ellipse 53.svg",
  },
  {
    userName: "Denney Smith",
    pic: "/imgs/Ellipse 53.svg",
  },
];

const commentData = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis cras consequat",
    date: "10.10.2010 19.00",
    userName: "Denney",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis cras consequat",
    date: "10.10.2010 19.00",
    userName: "Denney",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis cras consequat",
    date: "10.10.2010 19.00",
    userName: "Denney",
  },
];

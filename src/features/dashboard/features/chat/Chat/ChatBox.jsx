import { ImAttachment } from 'react-icons/im';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

const ChatBox = () => {
  const [msgValue, setMsgValue] = useState('');
  const [activeChat, setActiveChat] = useState();
  const msgBodyRef = useRef(null);

  const msgHandler = (e) => {
    setMsgValue(e.target.value);
  };

  const msgs = [
    {
      id: 1,
      user: { dp: '/imgs/userrr.svg', name: 'smith' },
      type: 'send',
      time: 'Last seen, 5.02pm',
      status: 'active',
      message: 'hello how are you?',
    },
    {
      id: 2,
      user: { dp: '/imgs/avatarta.svg', name: 'bacha' },
      type: 'send',
      time: 'Online',
      status: 'active',
      message: 'waiting for you',
    },
    {
      id: 3,
      user: { dp: '/imgs/Ellipse 53.svg', name: 'chikna' },
      type: 'received',
      time: 'Last seen, 10.52am',
      status: 'active',
      message: 'I am in class',
    },
    {
      id: 4,
      user: { dp: '/imgs/Frame.png', name: 'bhola' },
      type: 'send',
      time: 'Online ',
      status: 'active',
      message: 'Are you fine and healthy?',
    },
    {
      id: 5,
      user: { dp: '/imgs/placeholder 1.svg', name: 'khan' },
      type: 'received',
      time: 'Online',
      status: 'active',
      message: 'yes really...',
    },
  ];
  const [messages, setMessages] = useState(msgs);

  useEffect(() => {
    msgBodyRef.current.scrollTop = msgBodyRef.current.scrollHeight;
  }, [messages]);

  const sendmsg = (msge) => {
    if (msgValue != '') {
      setMessages((crnt) => [
        ...crnt,
        {
          id: 5,
          user: { dp: '/imgs/Ellipse 53.svg', name: 'smith' },
          type: 'send',
          time: 'Online - Last seen, 2.02pm',
          status: 'active',
          message: msgValue,
        },
      ]);

      setMsgValue('');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">
      <div className="relative border rounded-3xl shadow-xl lg:col-span-2 order-last lg:order-first">
        {msgs.map((item, index) => {
          if (item.id === activeChat) {
            return (
              <div className="flex justify-between px-6 pt-6 border-b pb-5" key={index}>
                <div className="flex gap-x-4">
                  <div>
                    <img src={item.user.dp} alt="" className="w-[50px] h-[50px] rounded-full" />
                  </div>
                  <div className="flex flex-col self-center">
                    <h2 className="text-xl">{item.user.name}</h2>
                    <p className="text-sm font-light">{item.time}</p>
                  </div>
                </div>
                <div className=" hidden lg:flex gap-x-5">
                  <img src="/imgs/phone.svg" alt="" />
                  <img src="/imgs/cameravdeio.svg" alt="" />
                  <img src="/imgs/vertidot.svg" alt="" />
                </div>
              </div>
            );
          }
        })}

        <div>
          <div ref={msgBodyRef} className="h-[65vh] flex flex-col overflow-y-auto  relative px-4 2xl:px-6 ">
            <div className="w-full mt-auto mb-[20px]  h-max flex flex-col gap-4">
              {messages.map((msg, index) => {
                const { id, type, message, user, status } = msg;
                return (
                  <div
                    key={index}
                    className={`${
                      type === 'received' ? 'mr-auto' : 'ml-auto flex-row-reverse'
                    } flex items-center gap-4 2xl:gap-[30px] max-w-max`}
                  >
                    <div className="relative">
                      <div>
                        <img width={60} height={60} src={user.dp} alt={user.name} />
                      </div>
                      <div className={` absolute bottom-2 text-xl right-1`}>
                        <div
                          className={`${
                            status === 'active' ? 'bg-[#2F9A03]' : 'bg-gray-700'
                          } w-3 2xl:w-[15px] h-3 2xl:h-[15px] rounded-full border border-white `}
                        ></div>
                      </div>
                    </div>

                    <div
                      className={`${
                        type === 'received' ? 'bg-white text-black' : 'bg-darkBoxes text-black'
                      } p-4 2xl:p-7 font-semibold 2xl:text-xl 2xl:leading-[27px] break-words rounded-[10px]`}
                    >
                      {message}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bottom-0 w-full ">
            <div className="w-full py-3 md:py-4 2xl:py-[22px] px-2 md:px-8 2xl:px-[50px] bg-darkBoxes rounded-[20px] ">
              <div className="flex items-center justify-between">
                <div className=" relative  w-full rounded-[10px] mr-4 md:mr-5 2xl:mr-[50px] ">
                  <div>
                    <div className="absolute top-[15px] lg:top-[18px] left-4">
                      <img src="/imgs/clipp.svg" alt="" className="w-5 h-5 lg:w-10 lg:h-10 lg:p-2" />
                    </div>
                    <input
                      onKeyPress={(e) => e.key === 'Enter' && sendmsg(msgValue)}
                      name="msg"
                      onChange={msgHandler}
                      value={msgValue}
                      className=" pl-10 lg:pl-16 py-4 2xl:py-[24px] focus:outline-none text-black text-[13px]  2xl:text-xl placeholder-[#848484] bg-[#F1F7FC] rounded-full w-full"
                      placeholder="Enter your message here..."
                    />
                    <div>
                      <div className="absolute top-[18px] cursor-pointer right-14 ">
                        <img src="/imgs/emoji.svg" alt="" className=" w-5 h-5 lg:w-[42px] lg:h-[42px] lg:p-2" />
                      </div>
                      <div className="absolute top-[18px] cursor-pointer right-7 lg:right-4">
                        <img src="/imgs/camera.svg" alt="" className=" w-5 h-5 lg:w-[42px] lg:h-[42px] lg:p-2" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[14px] lg:top-[18px] cursor-pointer -right-3 lg:-right-14">
                    <button
                      onClick={() => sendmsg(msgValue)}
                      className="rounded-full md:rounded-[10px]    bg-[#45A29E] text-white   inline-flex items-center justify-center   "
                    >
                      <img src="/imgs/mike.svg" alt="" className="w-7 h-7 lg:w-12 lg:h-12 p-1 lg:p-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" order-first lg:order-last">
        <div>
          <h1 className="text-xl text-[#2D3F65] pb-4 pt-2">Conversations</h1>
          {msgs.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-x-4 border-b py-4 transition-all duration-300 hover:shadow-xl px-4 cursor-pointer"
                onClick={() => setActiveChat(item.id)}
              >
                <div>
                  <img src={item.user.dp} alt="" className="w-[50px] h-[50px] rounded-full" />
                </div>
                <div className="flex flex-col self-center">
                  <h2>{item.user.name}</h2>
                  <p>{item.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

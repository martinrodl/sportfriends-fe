import React, { useState, useEffect, useRef } from 'react';
import { IoMdSend } from 'react-icons/io';
import { AiOutlinePaperClip, AiOutlineCamera } from 'react-icons/ai';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';

import avaratSvg from '../../assets/images/avatar.png';
import Message from './Message';

export default function ChatBox({ msgs }) {
  const [msgValue, setMsgValue] = useState('');
  const [messages, setMessages] = useState(msgs);
  const msgBodyRef = useRef(null);

  const msgHandler = (e) => {
    setMsgValue(e.target.value);
  };

  const sendmsg = () => {
    if (msgValue != '') {
      setMessages((crnt) => [
        ...crnt,
        {
          id: 5,
          user: { dp: avaratSvg, name: 'smith' },
          type: 'send',
          time: 'Online - Last seen, 2.02pm',
          status: 'active',
          message: msgValue,
        },
      ]);

      setMsgValue('');
    }
  };

  useEffect(() => {
    msgBodyRef.current.scrollTop = msgBodyRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="relative border rounded-3xl shadow-xl lg:col-span-2 order-last lg:order-first">
      <Header item={msgs[0]} />

      <div>
        <div ref={msgBodyRef} className="h-[58vh] flex flex-col overflow-y-auto  relative px-4 2xl:px-6 ">
          <div className="w-full mt-auto mb-[20px]  h-max flex flex-col gap-4">
            {messages.map((msg, index) => (
              <Message
                type={msg.type}
                message={msg.message}
                user={msg.user}
                status={msg.status}
                index={index}
                key={'message ' + index}
              />
            ))}
          </div>
        </div>
        <div className="bottom-0 w-full ">
          <div className="w-full py-3 md:py-4 2xl:py-[22px] px-2 md:px-8 2xl:px-[50px] bg-darkBoxes rounded-[20px] ">
            <div className="flex items-center justify-between">
              <div className="flex  w-full rounded-[10px] mr-4 md:mr-5 2xl:mr-[50px] ">
                <div className="w-full relative">
                  <div className="absolute top-[8px] left-4">
                    <AiOutlinePaperClip className="w-5 h-5 lg:w-10 lg:h-10 lg:p-2" />
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
                    <div className="absolute top-[8px] cursor-pointer right-7 ">
                      <BsEmojiSmileUpsideDown className=" w-5 h-5 lg:w-[42px] lg:h-[42px] lg:p-2" />
                    </div>
                  </div>
                </div>
                <div className="ml-3">
                  <button
                    onClick={() => sendmsg(msgValue)}
                    className="rounded-full md:rounded-[10px] bg-[#45A29E] text-white items-center justify-center"
                  >
                    <IoMdSend className="w-7 h-7 lg:w-12 lg:h-12 p-1 lg:p-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ item }) {
  return (
    <div className="flex justify-between px-6 pt-6 border-b pb-5">
      <div className="flex gap-x-4">
        <div>
          <img src={item.user.dp} alt="" className="w-[50px] h-[50px] rounded-full" />
        </div>
        <div className="flex flex-col self-center">
          <h2 className="text-xl">{item.user.name}</h2>
          <p className="text-sm font-light">{item.time}</p>
        </div>
      </div>
    </div>
  );
}

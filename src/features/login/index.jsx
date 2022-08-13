import { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';
import Slider from './Slider';
import Steps from './Steps';
import logo from './assets/images/logo.png';

const HomeIndex = () => {
  const [index, setIndex] = useState(0);
  const [component, setComponent] = useState('login');

  const handleForm = (component, slide) => {
    setComponent(component);
    setIndex(slide);
  };

  return (
    <div className="overflow-hidden relative md:pb-0 pb-6">
      <div className="grid overflow-hidden grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="max-w-[485px] mx-auto w-full md:pt-[56px] md:order-none order-last">
          <Link to="/" className="md:block hidden px-5">
            <img src={logo} alt="logo" />
          </Link>
          <div className="px-5 flex items-center">
            <Form component={component} setIndex={setIndex} handleForm={handleForm} index={index} />
          </div>
        </div>
        <div className="overflow-hidden">
          {component === 'login' ? <Slider /> : <Steps setIndex={setIndex} index={index} />}
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;

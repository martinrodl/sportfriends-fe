import { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

import { SLUGS } from '@sportfriends-fe/shared/constants';
import { ProtectedRoutes } from '@sportfriends-fe/shared/ui';

import PassowordPage from './PasswordPage';
import Login from './Login';
import SignUp from './SignUp';
import MoreInfo from './MoreInfo';
import AddProfileImg from './AddProfileImg';
import Slider from '../components/Slider';
import Steps from '../components/Steps';
import logo from '../assets/images/logo.png';

const HomeIndex = () => {
  const [index, setIndex] = useState(0);
  const location = useLocation();

  return (
    <div className="overflow-hidden relative md:pb-0 pb-6">
      <div className="grid overflow-hidden grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="px-5 max-w-[485px] mx-auto w-full md:mt-[56px] md:order-none order-last">
          <Link to={SLUGS.home}>
            <img src={logo} alt="logo" className="md:mb-0 mb-10" />
          </Link>
          <div className=" flex items-center">
            <Routes>
              <Route path={SLUGS.home} index element={<PassowordPage />} />
              <Route path={SLUGS.login} index element={<Login />} />
              <Route path={SLUGS.signup} element={<SignUp />} />
              <Route element={<ProtectedRoutes />}>
                <Route path={SLUGS.moreinfo} element={<MoreInfo />} />
                <Route path={SLUGS.addprofileimg} element={<AddProfileImg />} />
              </Route>
            </Routes>
          </div>
        </div>
        <div className="overflow-hidden">
          {location.pathname !== SLUGS.home ? (
            <Steps setIndex={setIndex} index={index} />
          ) : (
            <Slider setIndex={setIndex} index={index} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;

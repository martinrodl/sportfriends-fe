import React from 'react';
import { UserInfo, Schedule, Post, Review } from '@sportfriends-fe/shared/ui';

const Profile = () => {
  return (
    <div className="bg-slate-50 w-full flex flex-col items-center">
      <div className="flex flex-col gap-y-3 w-screen max-w-[1250px] py-10 md:px-20 bg-slate-50 overflow-hidden">
        <UserInfo />
        <Schedule />
        <div className="flex w-full flex-wrap gap-2 p-2">
          <div className="flex-1 min-w-[250px]">
            <Post />
          </div>
          <div className="flex-1">
            <Review
              name="Test name"
              rating={5}
              review="Test review to wirte about hte person"
              date="2021-10-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

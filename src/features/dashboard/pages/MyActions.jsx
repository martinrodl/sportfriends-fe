import React from 'react';
import { Link } from 'react-router-dom';

import { useGetUserEventsQuery } from 'services/eventApi';
import { useGetUserDatingPostsQuery } from 'services/datingApi';

import { SLUGS } from '../shared/constants';
import Event from '../components/events/Event';
import ListHeader from '../components/ListHeader';
import bandyIcon from '../assets/images/bandy.svg';
import sportsPartnerIcon from '../assets/images/users.svg';
import Partner from '../components/Partner';

const MyActions = () => {
  const { data: eventsData = { created: [], participated: [] }, isSuccess, error } = useGetUserEventsQuery();
  const { data: datingPosts, isSuccess: datingSuccess, error: datingError } = useGetUserDatingPostsQuery();

  return (
    <div className="max-w-[920px] mx-auto px-4 mt-12">
      <div className="">
        <div className="mb-10">
          <ListHeader
            title="Sport Partner"
            icon={
              <Link to={'/dashboard/' + SLUGS.SportsPartner}>
                <img className="h-8" src={sportsPartnerIcon} alt="group" />
              </Link>
            }
          />
          <Partner />
        </div>
        <div className="mb-10">
          <ListHeader
            title="Created Events"
            icon={
              <Link to={'/dashboard/' + SLUGS.CreateEvent}>
                <h2 className="text-[14px] font-normal text-[#04A5C2] px-10 py-2 rounded-full bg-white">Add</h2>
              </Link>
            }
          />
          <Event />
          <Event />
        </div>
        <div className="mb-10">
          <ListHeader
            title="Joined Events"
            icon={
              <Link to={'/dashboard/' + SLUGS.EventsMap}>
                <img className="h-8" src={bandyIcon} alt="group" />
              </Link>
            }
          />
          <Event />
          <Event />
        </div>
      </div>
    </div>
  );
};

export default MyActions;

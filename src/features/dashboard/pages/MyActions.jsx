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
  const {
    data: eventsData,
    isLoading: eventsLoading,
    isSuccess: eventsSuccess,
    error: eventsError,
  } = useGetUserEventsQuery();
  const { data: datingPosts, isSuccess: datingSuccess, error: datingError } = useGetUserDatingPostsQuery();

  console.log('eventsData ', eventsData);

  return (
    <div className="max-w-[920px] mx-auto px-4 mt-12">
      <div className="">
        <div className="mb-10">
          <ListHeader
            title="Sport Partner"
            icon={
              <Link to={'/dashboard/' + SLUGS.CreateSportsPartnerPost}>
                <h2 className="text-[14px] font-normal text-[#04A5C2] px-10 py-2 rounded-full bg-white">Add</h2>
                {/* <img className="h-8" src={sportsPartnerIcon} alt="group" /> */}
              </Link>
            }
          />
          {datingSuccess &&
            Array.isArray(datingPosts?.posts) &&
            datingPosts.posts.map((post) => (
              <Partner
                id={post.id}
                title={post.title}
                description={post.description}
                sport={post.sports[0]}
                key={post.id}
              />
            ))}
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
          {eventsSuccess && eventsData.created.map((event) => <Event event={event} key={event.id} />)}
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
          {eventsSuccess && eventsData.participated.map((event) => <Event event={event} key={event.id} />)}
        </div>
      </div>
    </div>
  );
};

export default MyActions;

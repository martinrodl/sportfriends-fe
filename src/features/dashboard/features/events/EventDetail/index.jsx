import React from "react";
import Comments from "./Comments";
import Join from "./Join";
import Participants from "./Participants";

const EventDetail = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-8">
        <Join />
        <Participants />
        <Comments />
      </div>
    </div>
  );
};

export default EventDetail;

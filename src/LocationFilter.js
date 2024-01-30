import React from "react";
import { Location } from "./Location";

export function LocationFilter({ musicians, onAddBandMember, selectedEventId, bandMembersByEvent }) {
  const locationList = [
    ...new Set(musicians.map((musician) => musician.location)),
  ];

  return (
    <ul>
      {locationList.map((location) => (
        <Location
          key={location}
          location={location}
          musicians={musicians}
          onAddBandMember={onAddBandMember}
          selectedEventId={selectedEventId}
          bandMembersByEvent={bandMembersByEvent}
        />
      ))}
    </ul>
  );
}

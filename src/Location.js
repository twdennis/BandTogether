import React, { useState } from "react";
import { Musician } from "./Musician";

export function Location({
  location,
  musicians,
  onAddBandMember,
  selectedEventId,
  bandMembersByEvent,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={location}>
      <h3 onClick={handleToggle}>
        {location} {isOpen ? "ⓧ" : "▽"}
      </h3>
      {isOpen && (
        <ul>
          {musicians
            .filter((musician) => musician.location === location)
            .map((filteredMusician) => (
              <Musician
                key={filteredMusician.id}
                musician={filteredMusician}
                onAddBandMember={() =>
                  onAddBandMember(selectedEventId, filteredMusician)
                }
                bandMembersByEvent={bandMembersByEvent}
                selectedEventId={selectedEventId}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

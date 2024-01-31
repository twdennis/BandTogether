import React, { useState } from "react";
 import { Musician } from "./Musician";

 export function Instrument({
  instrument,
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
    <div key={instrument}>
      <div onClick={handleToggle} className="unexpanded location-list">
        <h3>{instrument}</h3>
        <h2 style={{cursor: 'pointer'}}> {isOpen ? "∨" : "⨠"}</h2>
      </div>
      {isOpen && (
        <ul>
          {musicians
            .filter((musician) => musician.instrument === instrument)
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

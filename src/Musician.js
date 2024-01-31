import React, { useState } from "react";

export function Musician({
  musician,
  onAddBandMember,
  selectedEventId,
  bandMembersByEvent,
}) {
  const [expanded, setExpanded] = useState(false);

  const isAddedToEvent =
    !selectedEventId ||
    bandMembersByEvent[selectedEventId]?.includes(musician.id);

  function toggleExpanded(musicianId) {
    setExpanded(!expanded);
  }

  return (
    <li className="list-item">
      <div className="unexpanded-list-item">
        <p className="musician" onClick={() => toggleExpanded(musician.id)}>
          {musician.firstName} {musician.lastName}
        </p>
        <button
          className="list-button"
          onClick={onAddBandMember}
          disabled={isAddedToEvent}
        >
          Add
        </button>
      </div>
      {expanded && (
        <div className="musician-details">
          <p style={{ margin: "10px" }}>Instrument: {musician.instrument}</p>
          <p style={{ margin: "10px" }}>Location: {musician.location}</p>
        </div>
      )}
    </li>
  );
}

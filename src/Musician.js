import React from "react";

export function Musician({
  musician,
  onAddBandMember,
  selectedEventId,
  bandMembersByEvent,
}) {
  const isAddedToEvent =
    !selectedEventId ||
    bandMembersByEvent[selectedEventId]?.includes(musician.id);

  return (
    <li>
      <p>
        {musician.firstName} {musician.lastName}
      </p>
      <button
        className="button"
        onClick={onAddBandMember}
        disabled={isAddedToEvent}
      >
        Add
      </button>
    </li>
  );
}

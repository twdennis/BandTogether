import React from "react";

export function Event({
  event,
  bandMembers,
  musicians,
  onSelectEvent,
  selectedEvent,
  onDeleteBandMember,
  onDeleteEvent,
}) {
  const isSelected = event.eventId === selectedEvent?.eventId;

  const musicianIdsForEvent = bandMembers[event.eventId] || [];
  console.log(musicianIdsForEvent);

  const musiciansForEvent = musicians.filter((musician) =>
    musicianIdsForEvent.includes(musician.id)
  );

  return (
    <div className={isSelected ? "selected" : ""}>
      <div>
        <h2>{event.eventName}</h2>
        {isSelected && (
          <div>
            <h2>{event.eventDate}</h2>
            <h3>{event.eventLocation}</h3>
            <ul>
              {musiciansForEvent.map((musician) => (
                <li key={musician.id}>
                  {musician.firstName} {musician.lastName}
                  <span
                    onClick={() =>
                      onDeleteBandMember(event.eventId, musician.id)
                    }
                  >
                    ❌
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button onClick={() => onSelectEvent(event)}>
        {!isSelected ? "Select" : "Close"}
      </button>
      {isSelected && (
        <button onClick={() => onDeleteEvent(event.eventId)}>Delete</button>
      )}
    </div>
  );
}

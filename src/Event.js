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
    <div
      className={isSelected ? "selected" : "event"}
      onClick={!isSelected ? () => onSelectEvent(event) : undefined}
    >
      <div>
        <h2>{event.eventName}</h2>
        {isSelected && (
          <div>
            <h3>{event.eventDate}</h3>
            <h3>{event.eventLocation}</h3>
            <ul>
              {musiciansForEvent.map((musician) => (
                <li key={musician.id}>
                  {musician.firstName} {musician.lastName}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      onDeleteBandMember(event.eventId, musician.id)
                    }
                  >
                    &nbsp;&nbsp;➖
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <>
        {isSelected && (
          <>
            <h2
              className="event-delete"
              onClick={() => onSelectEvent(event)}
            >
              ⛌
            </h2>
            <button
              className="button event-close"
              onClick={() => onDeleteEvent(event.eventId)}
            >
              Delete
            </button>
          </>
        )}
      </>
    </div>
  );
}

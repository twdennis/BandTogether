import React from "react";
import { Event } from "./Event";

export function EventList({
  events,
  bandMembers,
  musicians,
  onSelectEvent,
  selectedEvent,
  onDeleteBandMember,
  onDeleteEvent,
}) {
  return (
    <ul>
      {events.map((ev) => (
        <Event
          key={ev.eventId}
          event={ev}
          bandMembers={bandMembers}
          musicians={musicians}
          onSelectEvent={onSelectEvent}
          selectedEvent={selectedEvent}
          onDeleteBandMember={onDeleteBandMember}
          onDeleteEvent={onDeleteEvent}
        />
      ))}
    </ul>
  );
}

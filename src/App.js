import React, { useState } from "react";
import { initialMusicianList } from "./initialMusicianList";

import "./styles.css";
import { LocationFilter } from "./LocationFilter";
import { FormNewEvent } from "./FormNewEvent";
import { EventList } from "./EventList";
import { FormNewMusician } from "./FormNewMusician";
import { Title } from "./Title";

export default function App() {
  const [musicians, setMusicians] = useState(initialMusicianList);
  const [bandMembersByEvent, setBandMembersByEvent] = useState({});
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleAddBandMember(eventId, musician) {
    setBandMembersByEvent((prevBandMembers) => {
      const updatedBandMembers = { ...prevBandMembers };
      if (!updatedBandMembers[eventId]) {
        updatedBandMembers[eventId] = [];
      }
      if (!updatedBandMembers[eventId].includes(musician.id)) {
        updatedBandMembers[eventId].push(musician.id);
      }
      return updatedBandMembers;
    });
  }

  function handleDeleteBandMember(eventId, musicianId) {
    setBandMembersByEvent((prevBandMembers) => {
      const updatedBandMembers = { ...prevBandMembers };
      updatedBandMembers[eventId] = updatedBandMembers[eventId].filter(
        (bandMemberId) => musicianId !== bandMemberId
      );
      return updatedBandMembers;
    });
  }

  function handleAddMusician(musician) {
    setMusicians((musicians) => [...musicians, musician]);
  }

  function handleAddEvent(newEvent) {
    setEvents((events) => [...events, newEvent]);
  }

  function handleSelectEvent(event) {
    setSelectedEvent((cur) => (cur?.eventId === event.eventId ? null : event));
  }

  function handleDeleteEvent(eventId) {
    const deleteConfrimed = window.confirm(
      "Are you sure want to delete this event?"
    );
    if (deleteConfrimed) {
      setEvents((events) => events.filter((cur) => cur.eventId !== eventId));
    }
  }

  return (
    <div>
      <div className="header">
        <Title />
      </div>
      <div className="row">
        <div className="column">
          <LocationFilter
            musicians={musicians}
            onAddBandMember={handleAddBandMember}
            selectedEventId={selectedEvent?.eventId}
            bandMembersByEvent={bandMembersByEvent}
          />
          <FormNewMusician onAddMusician={handleAddMusician} />
        </div>
        <div className="column">
          <EventList
            bandMembers={bandMembersByEvent}
            musicians={musicians}
            events={events}
            onSelectEvent={handleSelectEvent}
            selectedEvent={selectedEvent}
            onDeleteBandMember={handleDeleteBandMember}
            onDeleteEvent={handleDeleteEvent}
          />
          <FormNewEvent onAddEvent={handleAddEvent} />
        </div>
      </div>
    </div>
  );
}

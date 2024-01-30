import React, { useState } from "react";

export function FormNewEvent({ onAddEvent }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventLocation, setEventLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!eventName || !eventDate || !eventLocation) return;

    const eventId = crypto.randomUUID();

    const newEvent = {
      eventId,
      eventName,
      eventDate,
      eventLocation,
    };

    onAddEvent(newEvent);
    setEventName("");
    setEventDate(new Date());
    setEventLocation("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name of event</label>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <label>Date</label>
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <label>Location</label>
      <input
        type="text"
        value={eventLocation}
        onChange={(e) => setEventLocation(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

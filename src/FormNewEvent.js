import React, { useState } from "react";

export function FormNewEvent({ onAddEvent }) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventLocation, setEventLocation] = useState("");
  const [open, setOpen] = useState(false);

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
    setOpen(false);
  }

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div>
      {open && (
        <div>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form new-event">
              <h1>New Event</h1>
              <h2 className="form-close" onClick={toggleOpen}>
                ⛌
              </h2>
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
              <button className="button">Add</button>
            </form>
          </div>
        </div>
      )}
      {!open && (
        <button
          className="button"
          style={{ justifySelf: "end" }}
          onClick={toggleOpen}
        >
          Add new event
        </button>
      )}
    </div>
  );
}

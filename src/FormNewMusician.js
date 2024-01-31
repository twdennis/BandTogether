import React, { useState } from "react";

export function FormNewMusician({ onAddMusician }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [instrument, setInstrument] = useState("");
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState("");
  // const openStyle = {
  //   backgroundColor: "white",
  // };

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !instrument || !location) return;
    const id = crypto.randomUUID();

    const newMusician = {
      id,
      firstName,
      lastName,
      instrument,
      location,
    };
    onAddMusician(newMusician);
    setFirstName("");
    setLastName("");
    setInstrument("");
    setLocation("");
  }
  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        className={`form-add-musician ${isOpen ? "open-form" : ""}`}
      >
        {isOpen && (
          <>
            <label>Forename:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Surname</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Instrument</label>
            <input
              type="text"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
            />
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </>
        )}
        <button className={isOpen ? "button" : "button-not-open"} onClick={toggleOpen}>
          {isOpen ? "Add" : "Add new musician"}
        </button>
      </form>
    </div>
  );
}

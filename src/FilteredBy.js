import { useState } from "react";
import { LocationFilter } from "./LocationFilter";
import { InstrumentFilter } from "./InstrumentFilter";
export function FilteredBy({
  musicians,
  onAddBandMember,
  selectedEventId,
  bandMembersByEvent,
}) {
  const [filterToggle, setFilterToggle] = useState("location");

  return (
    <>
      <form className="filter-form">
        <label>Filter:</label>
        <select
          value={filterToggle}
          onChange={(e) => setFilterToggle(e.target.value)}
        >
          <option value={"location"}>Location</option>
          <option value={"instrument"}>Instrument</option>
        </select>
      </form>
      {filterToggle === "location" && (
        <LocationFilter
          musicians={musicians}
          onAddBandMember={onAddBandMember}
          selectedEventId={selectedEventId}
          bandMembersByEvent={bandMembersByEvent}
        />
      )}
      {filterToggle === "instrument" && (
        <InstrumentFilter
          musicians={musicians}
          onAddBandMember={onAddBandMember}
          selectedEventId={selectedEventId}
          bandMembersByEvent={bandMembersByEvent}
        />
      )}
    </>
  );
}

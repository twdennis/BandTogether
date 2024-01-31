import { React } from "react";
import { Instrument } from "./Instrument";

export function InstrumentFilter({ musicians, onAddBandMember, selectedEventId, bandMembersByEvent }) {
  const instrumentList = [
    ...new Set(musicians.map((musician) => musician.instrument)),
  ];

  return (
    <ul>
      {instrumentList.map((instrument) => (
        <Instrument
          key={instrument}
          instrument={instrument}
          musicians={musicians}
          onAddBandMember={onAddBandMember}
          selectedEventId={selectedEventId}
          bandMembersByEvent={bandMembersByEvent}
        />
      ))}
    </ul>
  );
}

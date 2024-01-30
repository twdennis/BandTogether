import React from "react";
import { BandMember } from "./App";

function BandList({ bandMembers }) {
  return (
    <ul>
      {bandMembers.map((bandMember) => (
        <BandMember key={bandMember.id} bandMember={bandMember} />
      ))}
    </ul>
  );
}

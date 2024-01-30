import React from "react";

export function BandMember({ bandMember }) {
  return (
    <li>
      <h3>{bandMember.firstName}</h3>
      <h4>({bandMember.instrument})</h4>
    </li>
  );
}

import React from "react";

const History = ({ match, location, history }) => (
  <div className="ed-grid">
    <code>{JSON.stringify(match)}</code>
    <code>{JSON.stringify(location)}</code>
    <code>{JSON.stringify(history)}</code>
  </div>
);

export default History;

import React, { useState } from 'react';

function ClientItem(props) {
  const [highlight, setHighlight] = useState(false);

  return (
    <li className={`client-item flex flex-col p-1 ${highlight && 'highlight'}`} onDragOver={() => setHighlight(true)} onDragLeave={() => setHighlight(false)}>
      <span>{props.name}</span>
      <span className="text-xs text-gray-600">{props.sessions}</span>
      <span className="text-xs text-gray-600">{props.decks}</span>
    </li>
  );
}

export default ClientItem;

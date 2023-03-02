import React, { useState } from 'react';

const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState(text.substring(0, 600));

  return (
    <div>
      <p>{expanded ? text : truncatedText}</p>
      {!expanded && text.length > truncatedText.length && (
        <button onClick={() => setExpanded(true)}>Ver más</button>
      )}
      {expanded && (
        <button onClick={() => setExpanded(false)}>Ver menos</button>
      )}
    </div>
  );
};

export default ExpandableText;

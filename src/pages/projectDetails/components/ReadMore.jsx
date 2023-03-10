import React, { useState } from 'react';
import { Button } from "@mui/material";

const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState(text.substring(0, 800));

  return (
    <div>
      <p className='text-read'>{expanded ? text : truncatedText}</p>
      {!expanded && text.length > truncatedText.length && (
        <Button color="secondary" variant="outlined" onClick={() => setExpanded(true)}>Leer más</Button>
      )}
      {expanded && (
        <Button color="secondary" variant="outlined" onClick={() => setExpanded(false)}>Leer menos</Button>
      )}
    </div>
  );
};

export default ExpandableText;

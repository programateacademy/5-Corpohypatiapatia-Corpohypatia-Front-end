import React, { useState } from 'react';
import { Button } from "@mui/material";

const HomeReadMore = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState(text.substring(0, 800));

  return (
    <div>
      <p className='text-read'>{expanded ? text : truncatedText}</p>
      {!expanded && text.length > truncatedText.length && (
        <Button className="readmore-butt" variant="outlined" onClick={() => setExpanded(true)}>Leer más</Button>
      )}
      {expanded && (
        <Button className="readmore-butt" variant="outlined" onClick={() => setExpanded(false)}>Leer menos</Button>
      )}
    </div>
  );
};

export default HomeReadMore;

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

// import React, { useState } from "react";

// const ReadMore = ({ text }) => {
//     const [isCollapsed, setCollapse] = useState(true);
//     const [buttonText, setButtonText] = useState("Ver más");

//     const handleClick = () => {
//         setCollapse(!isCollapsed);
//         setButtonText(isCollapsed ? "Ver menos" : "Ver más");
//     };

//     return (
//         <>
//             <p>
//                 {isCollapsed
//                     ? text.slice(0, 200) + "..."
//                     : text.slice(0, text.length)}
//             </p>
//             <button onClick={handleClick}>{buttonText}</button>
//         </>
//     );
// };

// export default ReadMore;
// import React, { useState } from 'react';

// const FAQItem = ({ question, answer }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleAnswer = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="question">
//       <button onClick={toggleAnswer}>
//         <span>{question}</span>
//         <span>
//         {/* <i className={`far fa-chevron-${isExpanded ? 'up' : 'down'}`} /> */}
//         </span>
//       </button>
//       {isExpanded && <p>{answer}</p>}
//     </div>
//   );
// };

// export default FAQItem;
// import React, { useState } from 'react';

// const FAQItem = ({ question, answer }) => {
//  const [isExpanded, setIsExpanded] = useState(false);

//  const toggleAnswer = () => {
//    setIsExpanded(!isExpanded);
//  };

//  return (
//    <div className="question border-b border-black" onClick={toggleAnswer}>
//      <button className="w-full py-5 px-4 flex justify-between items-center bg-white bg-opacity-60 text-left">
//        <span className="text-xl font-montserrat font-medium">{question}</span>
//        <span>{isExpanded ? '▲' : '▼'}</span>
//      </button>
//      <div className={`transition-all duration-300 ${isExpanded ? 'block p-4' : 'hidden'}`}>
//        <p className="text-lg font-montserrat">{answer}</p>
//      </div>
//    </div>
//  );
// };

// export default FAQItem;

import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
 const [isExpanded, setIsExpanded] = useState(false);

 return (
   <div className="question" style={{ borderBottom: '1px solid black', marginBottom: '10px' }}>
     <button 
       onClick={() => setIsExpanded(!isExpanded)}
       style={{ 
         width: '100%',
         padding: '20px 15px',
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         background: 'transparent',
         border: 'none',
         cursor: 'pointer',
         fontSize: '22px',
         fontFamily: 'Montserrat, sans-serif'
       }}
     >
       <span>{question}</span>
       <span>{isExpanded ? '▲' : '▼'}</span>
     </button>
     
     {isExpanded && (
       <p style={{ 
         padding: '0 15px 30px 15px',
         fontSize: '22px',
         fontFamily: 'Montserrat, sans-serif'
       }}>
         {answer}
       </p>
     )}
   </div>
 );
};

export default FAQItem;
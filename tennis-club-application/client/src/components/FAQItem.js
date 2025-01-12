import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnswer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="question">
      <button onClick={toggleAnswer}>
        <span>{question}</span>
        <span>
        {/* <i className={`far fa-chevron-${isExpanded ? 'up' : 'down'}`} /> */}
        </span>
      </button>
      {isExpanded && <p>{answer}</p>}
    </div>
  );
};

export default FAQItem;

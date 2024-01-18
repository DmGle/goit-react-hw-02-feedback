import React from 'react';
import './feedback.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button className='button' key={option} onClick={() => onLeaveFeedback(option)}>
          <p className='button-text'>{option}</p>
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
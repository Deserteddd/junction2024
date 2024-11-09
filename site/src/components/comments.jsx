import React, { useState } from 'react';

function Comment({clicked, submittedTexts, setSubmittedTexts}) {
  
  const [inputValue, setInputValue] = useState('');

  
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(clicked)
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const date = new Date().toLocaleTimeString();
      setSubmittedTexts((prevTexts) => [{text: inputValue, time: date}, ...prevTexts]); // Add the input value to the list
      setInputValue('');
      
      console.log(date)
    }
  };

  

  if (clicked) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="comment here"
        />
        <button type="submit">Submit</button>
      </form>


      <div className="comments-container">
        
        <ul className="comments-list">
        {submittedTexts.map((comment, index) => (
          <li key={index} className="comment-item">
            <p>{comment.text}</p>
            <span className="comment-time">{comment.time}</span>
          </li>

        ))}
        </ul>
        
      </div>
    
    </div>
    
  );
}
}

export default Comment
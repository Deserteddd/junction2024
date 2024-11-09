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
      setSubmittedTexts((prevTexts) => [...prevTexts, inputValue]); // Add the input value to the list
      setInputValue('');
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
          placeholder="Enter some text"
        />
        <button type="submit">Submit</button>
      </form>


      <div className="comments-container">
        
        <ul className="comments-list">
        {submittedTexts.map((text, index) => (
          <li key={index} className="comment-item">{text}</li>
        ))}
        </ul>
        
      </div>
    
    </div>
    
  );
}
}

export default Comment
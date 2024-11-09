import React, { useState, useEffect } from 'react';

function Comment({clicked, hasSwiped}) {

    const [comments, setComments] = useState([]);

    const [input, setInput] = useState("")

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setComments([...comments, input]);
        console.log(input);
        setInput("");      
    }

    useEffect(() => {
        if (hasSwiped) {
          setComments([]);  
        }
      }, [hasSwiped]);

    
    
    return (
        <>
        {clicked && (
            <> 
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Add A Comment:</label>
                <br></br>
                <input value={input} onChange={handleInputChange} type="text" id="comment" name="comment"/><br></br>
                <button type="submit">Submit</button>
            </form>
            <p>New comment:</p>
            <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
            ))}
            </ul>
        </>
        )}
        </>
  )

}

export default Comment;
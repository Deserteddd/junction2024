import React, { useEffect, useState } from 'react'

function ApiRequest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the Express API
    fetch('http://localhost:3000/api/data') // Make sure the URL matches your Express API endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="ApiRequest">
      <h1>React and Express Integration</h1>
      {data ? console.log(data) : <p>Loading...</p>}
    </div>
  );
}


export default ApiRequest
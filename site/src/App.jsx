import { useEffect, useState } from 'react'
import ApiRequest from './components/ApiRequest'
import CardContainer from './components/card_container';

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('src/aloitteet.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCards(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  return (
    <>
      <p>Hei mulkero</p>
      {error && <p>Error: {error}</p>}
      <div>
        <CardContainer cards={cards} />
      </div>
    </>
  )
}

export default App

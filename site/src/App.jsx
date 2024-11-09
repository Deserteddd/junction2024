import { useEffect, useState } from 'react'
import CardContainer from './components/card_container';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/data')
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
    <div className = 'bodyContainer'>
      <div className = 'cardPile'>
        <CardContainer cards = {cards}/>
      </div>
    </div>
  )
}


export default App;
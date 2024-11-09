import { useEffect, useState } from 'react'
import CardContainer from './components/card_container';
import Comments from './components/comments';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [submittedTexts, setSubmittedTexts] = useState([]);

  const resetComments = () => {
    setSubmittedTexts([]);
  }

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
         <CardContainer resetComments={resetComments} clicked={clicked} setClicked={setClicked} cards = {cards}/>
      </div>
      <div className = 'comments'>
        <Comments setSubmittedTexts={setSubmittedTexts} submittedTexts={submittedTexts} clicked={clicked}/>
      </div>
    </div>
  )
}


export default App;
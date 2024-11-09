import { useEffect, useState } from 'react'
import CardContainer from './components/card_container';
import Comments from './components/comments';

function App() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);

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

  const onSwipe = (direction, cardInfo) => {
    console.log('You swiped: ' + direction);
    if (direction === 'right') {
      console.log('You liked: ' + cardInfo.name.fi);
      window.open(cardInfo.url.fi, '_blank');
    }

    setHasSwiped(true);
    };

    useEffect(() => {
      if (hasSwiped) {
        setHasSwiped(false);
      }
    }, [hasSwiped]);

  

  return (
    <>
      <div>
        <CardContainer onSwipe={onSwipe} cards = {cards} clicked = {clicked} setClicked = {setClicked}/>
      </div>
      <div>
        <Comments clicked={clicked} hasSwiped={hasSwiped}/>
      </div>
    </>
  )
}


export default App;
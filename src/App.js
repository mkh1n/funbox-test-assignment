import './App.css';
import Card from './components/Card';
import Container from './components/Container';
import CardHodler from './components/CardHolder';
import MainText from './components/MainText';
import { useState } from 'react';
const cardsData = [
  {
    id: 1,
    name: 'Нямушка',
    flavor: 'с фуа-гра',
    description: 'Печень утки разварная с артишоками.',
    amount: 10,
    gift: 'мышь',
    additional: null,
    weight: '0,5'
  },
  {
    id: 2,
    name: 'Нямушка',
    flavor: 'с рыбой',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    amount: 40,
    gift: '2 мыши',
    additional: null,
    weight: '2'
  },
  {
    id: 3,
    name: 'Нямушка',
    flavor: 'с курой',
    description: 'Филе из цыплят с трюфелями в бульоне.',
    amount: 100,
    gift: '5 мышей',
    additional: 'заказчик доволен',
    weight: '5'
  }
]
function App() {
  const [cardsState, setcardsState] = useState(cardsData.map((card)=>({id: card.id, selected: false, disabled: false})));

  const handleClick = (id) => () => {
    const newCardsState = [...cardsState];
    const cardState = newCardsState.find(state => state.id === id);
    console.log(newCardsState, cardState)
    cardState.selected = !cardState.selected;
    setcardsState(newCardsState)
  }
  const cards = cardsData.map((card)=>{
    const cardState = cardsState.find(state => state.id === card.id);
    return <Card
    key={card.id}
    name={card.name}
    flavor={card.flavor}
    description={card.description}
    amount={card.amount}
    gift={card.gift}
    additional={card.additional}
    weight={card.weight}
    selected={cardState.selected}
    disabled={cardState.disabled}
    onClick={handleClick(card.id)}
    ></Card>
  })
  return (
    <Container>
      <MainText/>
      <CardHodler>
        {cards}
      </CardHodler>
    </Container>
  );
}

export default App;

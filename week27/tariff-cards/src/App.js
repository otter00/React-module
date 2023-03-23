import React from 'react';

import './App.css';
import './components/styles/tariffcard.scss';
import './components/styles/variables.scss';

import TariffCard from './components/TariffCard';

const cards = [{
  id: 1,
  fare: 300, 
  price: 300,
  traffic: 10 
}, {
  id: 2,
  fare: 450, 
  price: 450,
  traffic: 50
}, {
  id: 3,
  fare: 550, 
  price: 550,
  traffic: 100
}, {
  id: 4,
  fare: 1000, 
  price: 1000,
  traffic: 200
}];

function App() {
  return (
    <div className="App"> {     
        cards.map((card, id) =>
        <TariffCard key={id}
        fare={card.fare}
        price={card.price}
        traffic={card.traffic}
        ></TariffCard>
        )
    }
    </div>
  );
}

export default App;

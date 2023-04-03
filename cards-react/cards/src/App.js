import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './components/Card';
import './components/Card.scss';

let cards = [{
  id: 1,
fare: '300',
price: '300',
traffic: '10',
}, {
  id: 2,
  fare: '450',
  price: '450',
  traffic: '50',
  isSelected: true,
}, {
  id: 3, 
  fare: '550',
  price: '550',
  traffic: '100',
}, {
  id: 3,
  fare: '1000',
  price: '1000',
  traffic: '200',
}];

function App () {
    return (
      <div>
        <div className="card__container">
          {
            cards.map((card,id)=>
            <Card 
            id={id}
            fare={card.fare}
            price={card.price}
            traffic={card.traffic}
            isSelected={card.isSelected}>
            </Card>
            )
          }
        </div>
      </div>
  );
}

export default App;

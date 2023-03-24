import React from 'react';

import './App.css';
import './components/styles/variables.scss';

import TariffCard from './components/TariffCard';

import tariffcard from './components/styles/tariffcard.module.scss';
import BackG from './components/styles/background.module.scss';
import cn from 'classnames';

let backBody;
let backHead;

const cards = [{
  id: 1,
  fare: 300, 
  price: 300,
  traffic: 10,
  backHead: backHead = cn([`${tariffcard.limit_info}`, `${BackG.backAquaHead}`]),
  backBody: backBody = cn([`${tariffcard.price_per_month}`, `${BackG.backAqua}`])
}, {
  id: 2,
  fare: 450, 
  price: 450,
  traffic: 50,
  backHead: backHead = cn([`${tariffcard.limit_info}`, `${BackG.backGreenHead}`]),
  backBody: backBody = cn([`${tariffcard.price_per_month}`, `${BackG.backGreen}`])
}, {
  id: 3,
  fare: 550, 
  price: 550,
  traffic: 100,
  backHead: backHead = cn([`${tariffcard.limit_info}`, `${BackG.backRedHead}`]),
  backBody: backBody = cn([`${tariffcard.price_per_month}`, `${BackG.backRed}`])
}, {
  id: 4,
  fare: 1000, 
  price: 1000,
  traffic: 200,
  backHead: backHead = cn([`${tariffcard.limit_info}`, `${BackG.backBlackHead}`]),
  backBody: backBody = cn([`${tariffcard.price_per_month}`, `${BackG.backBlack}`])
}];

function App() {
  //console.log(BackG);
  return (
    <div className="App"> {     
        cards.map((card, id) =>
        <TariffCard

        backBody={card.backBody}
        backHead={card.backHead}
        key={id}
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

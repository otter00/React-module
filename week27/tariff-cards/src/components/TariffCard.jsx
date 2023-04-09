import React from 'react';
import Tariffcard from './styles/tariffcard.module.scss';

export default class TariffCard extends React.Component {

    // super props is initial state for component (initially card is not clicked)
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
    };

    // func that changes the state of card by click anywhere inside the component
    handleChecked = () => {
        this.setState({
            isClicked: !this.state.isClicked,
        });
    };

    render() {

        // props from JSON (App.jsx)
        const {fare, price, traffic, backHead, backBody, scaled } = this.props;
        
        // check for the state of card
        // helps to see how and where the state changes and when
        console.log(this.state.isClicked);

        return (
            // hang up event upon the card wrapper
            // after click call for the function
            // and then make choosen (true) card scaled by hangin' up the props
            // props is given by JSON as class with right style
            <div onClick={this.handleChecked} 
            className={(this.state.isClicked ? scaled : '')}>
            <div className={Tariffcard.card}>
                <div className={Tariffcard.card_body}>

                    <div className={backHead}>Безлимитный {fare} </div>

                    <div className={backBody}>руб <span className={Tariffcard.price_value}>{price}</span> /мес</div>
                </div>

                <div className={Tariffcard.card_footer}>
                    <div className={Tariffcard.tarif_traffic}>До {traffic} Мбит/сек</div>

                    <div className={Tariffcard.card_text}>Объем включенного трафика не ограничен</div>
                </div >     
            </div>
            </div>
        );
    }
}


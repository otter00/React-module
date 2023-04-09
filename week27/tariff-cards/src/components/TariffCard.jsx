import React from 'react';
import Tariffcard from './styles/tariffcard.module.scss';
import cn from 'classnames';

export default class TariffCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
    };

    handleChecked = () => {
        this.setState({
            isClicked: !this.state.isClicked,
        });
    };

    render() {
        let classCard='';
        const {fare, price, traffic, backHead, backBody, scaled } = this.props;
        
        console.log(this.state.isClicked);

        return (
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


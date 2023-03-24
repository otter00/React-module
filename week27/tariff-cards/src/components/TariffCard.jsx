import React from 'react';
import tariffcard from './styles/tariffcard.module.scss';

export default class TariffCard extends React.Component {
    render() {
        const {fare, price, traffic, backHead, backBody } = this.props;

        return (
            <div className={tariffcard.card}>
                <div className={tariffcard.card_body}>

                    <div className={backHead}>Безлимитный {fare} </div>

                    <div className={backBody}>руб <span className={tariffcard.price_value}>{price}</span> /мес</div>
                </div>

                <div className={tariffcard.card_footer}>
                    <div className={tariffcard.tarif_traffic}>До {traffic} Мбит/сек</div>

                    <div className={tariffcard.card_text}>Объем включенного трафика не ограничен</div>
                </div>     
            </div>
        );
    }
}


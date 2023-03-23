import React from 'react';
import './styles/tariffcard.scss';


export default class TariffCard extends React.Component {
    render() {
        const {fare, price, traffic } = this.props;

        return (
            <div className="card">
                <div className="card-body">

                    <div className="limit-info">Безлимитный {fare} </div>

                    <div className='price-per-month'>руб <span className='price-value'>{price}</span> /мес</div>
                </div>

                <div className="card-footer">
                    <div className="tarif-traffic">До {traffic} Мбит/сек</div>

                    <div className="card-text">Объем включенного трафика не ограничен</div>
                </div>     
            </div>
        );
    }
}


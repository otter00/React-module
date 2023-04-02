import React from 'react';
import Tariffcard from './styles/tariffcard.module.scss';
import cn from 'classnames';

export default class TariffCard extends React.Component {

    static defaultProps = {
        checked: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
        };
    };

    handleChecked = () => {
        this.setState({
            checked: !this.state.checked,
        });
    };

    render() {

        let classCard='';
        const { checked } = this.state;
        const {fare, price, traffic, backHead, backBody, scaled, isSelected } = this.props;
        
        if(isSelected) classCard = cn[`${TariffCard.scaled}`];

        return (
            <div className={`${classCard}`} >
            <div className={Tariffcard.card}
                checked = { checked }
                onClick={this.handleChecked}>
                <div className={Tariffcard.card_body}>

                    <div className={backHead}>Безлимитный {fare} </div>

                    <div className={backBody}>руб <span className={Tariffcard.price_value}>{price}</span> /мес</div>
                </div>

                <div className={Tariffcard.card_footer}>
                    <div className={Tariffcard.tarif_traffic}>До {traffic} Мбит/сек</div>

                    <div className={Tariffcard.card_text}>Объем включенного трафика не ограничен</div>
                </div>     
            </div>
            </div>
        );
    }
}


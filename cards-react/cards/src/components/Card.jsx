import React from "react";
import './Card.scss';

export default class Card extends React.Component {
    render() {
        const {fare, traffic, price, isSelected} = this.props;
        return (
            <div className={"card__container" + (isSelected? " selected" : "")}>
                <div className="card__fare">Тариф: {fare}</div>
                <div className="card__traffic">Траффик: {traffic}</div>
                <div className="card__price">Цена: {price}</div>
            </div>
        );
    }
}

// export default class Example extends React.Component {
//     render() {
// 				let {description,title} = this.props
// 				title += description; //title = title + description
//          return (
//             <span>{title}</span>
//         );
//     }
// }
import React, { useState, useEffect } from "react";
import './Card.scss';

const FunctionalComponent = () => {

    // set initial state and method
    const [count, setCount] = React.useState(0);

    React.useEffect(()=>{
        setCount(count);
    }, []);

    console.log(count);

    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>{count}</button>
        </div>
    );
};

export default FunctionalComponent

// export default class Counter extends React.Component {

//     state = {
//       count: 0
//     };

//     handleClick = () => {
//       this.setState(({ count }) => ({
//         count: count + 1
//       }));
//     };

//     render() {
//       return <button onClick={this.handleClick}>{this.state.count}</button>;
//     }
//   }

// export default class Card extends React.Component {
//     render() {
//         const {fare, traffic, price, isSelected} = this.props;
//         return (
//             <div className={"card__container" + (isSelected? " selected" : "")}>
//                 <div className="card__fare">Тариф: {fare}</div>
//                 <div className="card__traffic">Траффик: {traffic}</div>
//                 <div className="card__price">Цена: {price}</div>
//             </div>
//         );
//     }
// }

// export default class Example extends React.Component {
//     render() {
// 				let {description,title} = this.props
// 				title += description; //title = title + description
//          return (
//             <span>{title}</span>
//         );
//     }
// }
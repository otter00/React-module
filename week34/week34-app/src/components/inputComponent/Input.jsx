import React from "react";
import InputStyle from './Input.module.scss';

export default class InputComponent extends React.Component {

    constructor(props) {
        super(props);
        //this.state = { text: this.props.text };
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({[name]: value.toUpperCase()});
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     //alert(`Было введено имя: ${this.state.text}`);
    // };

    render() {
        return (
            <form 
            className={InputStyle.form__container}
            onSubmit={this.handleSubmit} >
                <div className="inputs__group">
                    <input 
                    onChange={this.handleChangeInput}
                    value={this.state.email}
                    type="email"
                    name="email"
                    placeholder="email"/>

                    <input 
                    onChange={this.handleChangeInput}
                    value={this.state.password}
                    type="password"
                    name="password"
                    placeholder="password"/>
                </div>

                <div className="button__submit">
                    <button
                    type="submit" value="Submit">
                        Log In
                    </button>
                </div>
            </form>
        )
    }
}
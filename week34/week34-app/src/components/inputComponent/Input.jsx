import React from "react";
import InputStyle from './Input.module.scss';

export default class InputComponent extends React.Component {
    render() {
        return (
            <form className={InputStyle.form__container}>
                <div className="inputs__group">
                    <input 
                    type="email"
                    placeholder="login"/>

                    <input 
                    type="password"
                    placeholder="password"/>
                </div>

                <div className="button__submit">
                    <button
                    type="submit">
                        Log In
                    </button>
                </div>
            </form>
        )
    }
}
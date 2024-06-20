import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './Payment.css'; // Import the CSS file

const PaymentForm = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    return (
        <div className="payment-form-container">
        <div className="card-container">
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
        </div>
        <div className="credit-card-form">
            <form>
                <div className="input-container">
                    <input
                        type="number"
                        name="number"
                        placeholder="Card Number"
                        value={state.number}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        name="name"
                        placeholder="Card Name"
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="input-container half-width">
                    <input
                        type="number"
                        name="expiry"
                        placeholder="Expiration Date"
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="input-container half-width">
                    <input
                        type="number"
                        name="cvc"
                        placeholder="CVV"
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={() => setState((prev) => ({ ...prev, focus: 'cvc' }))}
                        min="100"
                        max="999"
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    </div>
    );
};

export default PaymentForm;

import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './Payment.css'; // Import the CSS file
import { FormContext } from '../../context/fieldsContext';

const PaymentForm = () => {
    const { selectedPlan } = useContext(FormContext);
    const [flipped, setFlipped] = useState(false);

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

    function flipHandler() {
        console.log('in')
        var overViewDiv = document.querySelector('.flipping-container');
        overViewDiv?.classList.toggle('flipped');
        setFlipped(!flipped);
        var frontSide = document.querySelector('.preview-plan-details-container');
        frontSide?.classList.toggle('hide-front-side');

        var backSide = document.querySelector('.back');
        // backSide?.classList.toggle('hide-front-side')
        backSide?.classList.toggle('show-back-side');
        console.log(overViewDiv, frontSide, backSide)
        console.log("Last")
    }

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
                    <div className="cvv-and-expiry-date-container">
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
                    </div>
                    <div className="submit-button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
            <div className="flipping-container">
                {
                    <>
                        <div className="preview-plan-details-container">
                            {selectedPlan ? (
                                <div className="plan-details">
                                    <div className="details-container">
                                        <div className="front">
                                            <div className="heading-container">
                                                <h2>Plan details</h2>
                                            </div>
                                            <p>Selected Plan: {selectedPlan.planType}</p>
                                            <p>Plan cost: {selectedPlan.planCost}</p>
                                            <p>Plan Speciality: {selectedPlan.planPrimarySpeciality}</p>
                                        </div>
                                        {/* <div className="back">
                                            back
                                        </div> */}
                                    </div>

                                </div>
                            ) : (
                                <p>No plan selected</p>
                            )}
                        </div>
                        {flipped &&
                            (<div className="back">
                                <div className="back-container">
                                    Back
                                </div>
                            </div>)
                        }
                    </>
                    //  (

                    // )
                }
                {/* <div className="review-pricing-container">
                    <button>
                        Go back to pricing
                    </button>
                    <button onClick={() => flipHandler()}>
                        View pricing
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default PaymentForm;

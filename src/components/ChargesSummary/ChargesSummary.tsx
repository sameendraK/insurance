import React, { FC, useContext, useState } from 'react';
import { ChargesSummaryWrapper } from './ChargesSummary.styled.ts'
interface ChargesFormProps { }

const ChargesSummary: FC<ChargesFormProps> = () => {
    const [goldBtnViewMore, setGoldBtnViewMore] = useState(false);
    const toggleGoldPlans = () => {
        setGoldBtnViewMore(!goldBtnViewMore);
    };
    const [silverBtnViewMore, setSilverBtnViewMore] = useState(false);
    const toggleSilverPlans = () => {
        setSilverBtnViewMore(!silverBtnViewMore);
    };
    const [platinumBtnViewMore, setPlatinumBtnViewMore] = useState(false);
    const toggleplatinumPlans = () => {
        setPlatinumBtnViewMore(!platinumBtnViewMore);
    };
    return (
        <ChargesSummaryWrapper>
            <div className="wrapper">
                <div className="charges-form-wrapper-container card-1">
                    <div className="charges-form-container">
                        <section>
                            <div className="plan-container">
                                <div className="plan-heading-container">
                                    <h3 className="card-1-heading">Silver</h3>
                                </div>
                                <div className="plan-details-container">
                                </div>
                            </div>
                            <div className="pricing-and-details-container pricing-1">
                                <div className="price-container">
                                    $45.67
                                </div>
                                <div className="details-container">
                                    <i className="fa-solid fa-check"></i>
                                    Medical cover
                                </div>
                            </div>
                            <div className="sub-details-container">
                                <div className="badge-container">
                                    <p>
                                        Covers trip losses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <p>
                                        Delays and medical expenses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <p>
                                        Higher medical coverage and trip losses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <a href='#'>
                                        Download trip details
                                    </a>
                                </div>
                            </div>
                            <div className="view-more-silver-button">
                                <button className='btn' onClick={toggleSilverPlans} type='button'>
                                    {silverBtnViewMore ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            <div className="more-details-container">
                                <div className={silverBtnViewMore ? 'gold-plan-more-details' : 'display-none'}>
                                    {/* This is a toggled div. */}
                                    <table>
                                        <thead>
                                            <th>
                                                <tr>
                                                    <td>
                                                        Coverage description
                                                    </td>
                                                </tr>
                                            </th>
                                            <th>
                                                <tr>
                                                    <td>
                                                        Amount
                                                    </td>
                                                </tr>
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Overseas medical expenses
                                                </td>
                                                <td>
                                                    $1,00,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Theft or dame to personal belongings
                                                </td>
                                                <td>
                                                    $7,500
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Baggage Delays
                                                </td>
                                                <td>
                                                    $900
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Travel Delay
                                                </td>
                                                <td>
                                                    $1000
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td>
                                                    Liability for harm or damage you can accidentally cause
                                                </td>
                                                <td>
                                                    $1,00,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Automatic travel cover extension
                                                </td>
                                                <td>
                                                    21 days
                                                </td>
                                            </tr> */}
                                            <tr>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <div>
                            <p>You need to pay $50</p>
                        </div>
                        <nav>
                            <button>
                                Continue
                            </button>
                        </nav> */}
                        </section>
                    </div>
                </div>
                <div className="charges-form-wrapper-container card-2 recommended-card">
                    <div className="charges-form-container">
                        <section>
                            <div className="plan-container">
                                <div className="plan-heading-container card-2">
                                    <h3 className="card-2-heading">Gold</h3>
                                </div>
                                <div className="plan-details-container">
                                </div>
                            </div>
                            <div className="pricing-and-details-container pricing-1">
                                <div className="price-container">
                                    $61.73
                                </div>
                                <div className="details-container">
                                    <i className="fa-solid fa-check"></i>
                                    Higher medical cover
                                </div>
                            </div>
                            <div className="sub-details-container">
                                <div className="badge-container">
                                    <p>
                                        Covers trip losses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <p>
                                        Delays and medical expenses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <p>
                                        Higher medical coverage and trip losses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <a href='#'>
                                        Download trip details
                                    </a>
                                </div>
                            </div>
                            <div className="view-more-button">
                                <button className='btn' onClick={toggleGoldPlans} type='button'>
                                    {goldBtnViewMore ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            <div className="more-details-container">
                                <div className={goldBtnViewMore ? 'gold-plan-more-details' : 'display-none'}>
                                    {/* This is a toggled div. */}
                                    <table>
                                        <thead>
                                            <th>
                                                <tr>
                                                    <td>
                                                        Coverage description
                                                    </td>
                                                </tr>
                                            </th>
                                            <th>
                                                <tr>
                                                    <td>
                                                        Amount
                                                    </td>
                                                </tr>
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Overseas medical expenses
                                                </td>
                                                <td>
                                                    $1,00,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Theft or dame to personal belongings
                                                </td>
                                                <td>
                                                    $7,500
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Baggage Delays
                                                </td>
                                                <td>
                                                    $900
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Travel Delay
                                                </td>
                                                <td>
                                                    $1000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Liability for harm or damage you can accidentally cause
                                                </td>
                                                <td>
                                                    $1,00,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Automatic travel cover extension
                                                </td>
                                                <td>
                                                    21 days
                                                </td>
                                            </tr>
                                            <tr>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="charges-form-wrapper-container card-3">
                    <div className="charges-form-container">
                        <section>
                            <div className="plan-container">
                                <div className="plan-heading-container">
                                    <h3 className="card-3-heading">Platinum</h3>
                                </div>
                                <div className="plan-details-container">
                                </div>
                            </div>
                            <div className="pricing-and-details-container pricing-1">
                                <div className="price-container">
                                    $71.04
                                </div>
                                <div className="details-container">
                                    <i className="fa-solid fa-check"></i>
                                    Comprehensive medical cover
                                </div>
                            </div>
                            <div className="sub-details-container">
                                <div className="badge-container">
                                    <p>
                                        Covers trip losses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <p>
                                        Delays and medical expenses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <p>
                                        Higher medical coverage and trip losses
                                    </p>
                                </div>
                                <div className="badge-container">
                                    <a href='#'>
                                        Download trip details
                                    </a>
                                </div>
                            </div>
                            <div className="view-more-platinum-button">
                                <button className='btn' onClick={toggleplatinumPlans} type='button'>
                                    {platinumBtnViewMore ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            <div className="more-details-container">
                                <div className={platinumBtnViewMore ? 'gold-plan-more-details' : 'display-none'}>
                                    {/* This is a toggled div. */}
                                    <table>
                                        <thead>
                                            <th>
                                                <tr>
                                                    <td>
                                                        Coverage description
                                                    </td>
                                                </tr>
                                            </th>
                                            <th>
                                                <tr>
                                                    <td>
                                                        Amount
                                                    </td>
                                                </tr>
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Overseas medical expenses
                                                </td>
                                                <td>
                                                    $1,00,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Theft or dame to personal belongings
                                                </td>
                                                <td>
                                                    $7,500
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td>
                                                    Baggage Delays
                                                </td>
                                                <td>
                                                    $900
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Travel Delay
                                                </td>
                                                <td>
                                                    $1000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Liability for harm or damage you can accidentally cause
                                                </td>
                                                <td>
                                                    $1,00,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Automatic travel cover extension
                                                </td>
                                                <td>
                                                    21 days
                                                </td>
                                            </tr> */}
                                            <tr>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <div>
                            <p>You need to pay $50</p>
                        </div>
                        <nav>
                            <button>
                                Continue
                            </button>
                        </nav> */}
                        </section>
                    </div>
                </div>
            </div>
        </ChargesSummaryWrapper>

    );
};

export default ChargesSummary;

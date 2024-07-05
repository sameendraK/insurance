import React, { FC, useContext, useState } from 'react';
import { ChargesSummaryWrapper } from './ChargesSummary.styled.ts'
import { FormContext } from '../../context/fieldsContext.js';
interface ChargesFormProps { }

const ChargesSummary: FC<ChargesFormProps> = () => {

    const { selectedPlanHandler } = useContext(FormContext)

    function clickHandler(item, index) {
        selectedPlanHandler(item, index);
        // selectedCard(item, index);
    }

    const [goldPlanTable, setGoldPlanTable] = useState(false);
    const toggleGoldPlans = () => {
        setGoldPlanTable(!goldPlanTable);
    };
    const [silverPlanTable, setSilverPlanTable] = useState(false);
    const toggleSilverPlans = () => {
        setSilverPlanTable(!silverPlanTable);
    };
    const [platinumPlanTable, setPlatinumPlanTable] = useState(false);
    const togglePlatinumPlans = () => {
        setPlatinumPlanTable(!platinumPlanTable);
    };
    const recommendedPlan: String = 'Silver';

    const plansArray = [
        {
            planType: 'Gold',
            planCost: '$61.73',
            planPrimarySpeciality: 'Higher medical cover',
            planDetails: ['Covers trip losses', 'Displays medical expenses', 'Higher medical coverage and trip losses'
            ],
            downloadTripButton: true,
            planMoreDetailsBtn: true,
            planMoreDetails: [
                {
                    headings: [
                        { isHeading: true, headingText: 'Coverage description' },
                        { isHeading: true, headingText: 'Amount' }
                    ],
                    rows: [
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Automatic travel cover extension', '21days'] },
                        { isRow: true, isForStyling: true, cells: ['invisibleText'] }
                    ],
                },
            ],
            isForStyling: true
        },
        {
            planType: 'Silver',
            planCost: '$61.73',
            planPrimarySpeciality: 'Higher medical cover',
            planDetails: ['Covers trip losses', 'Displays medical expenses', 'Higher medical coverage and trip losses'
            ],
            downloadTripButton: true,
            planMoreDetailsBtn: true,
            planMoreDetails: [
                {
                    headings: [
                        { isHeading: true, headingText: 'Coverage description' },
                        { isHeading: true, headingText: 'Amount' }
                    ],
                    rows: [
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Automatic travel cover extension', '21days'], },
                        { isRow: true, isForStyling: true, cells: ['invisibleText'] }
                    ]
                }
            ]
        },
        {
            planType: 'Platinum',
            planCost: '$61.73',
            planPrimarySpeciality: 'Higher medical cover',
            planDetails: ['Covers trip losses', 'Displays medical expenses', 'Higher medical coverage and trip losses'
            ],
            downloadTripButton: true,
            planMoreDetailsBtn: true,
            planMoreDetails: [
                {
                    headings: [
                        { isHeading: true, headingText: 'Coverage description' },
                        { isHeading: true, headingText: 'Amount' }
                    ],
                    rows: [
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Liability for harm or damage you can accidentally cause', '$1,00,000'] },
                        { isRow: true, cells: ['Automatic travel cover extension', '21days'] },
                        { isRow: true, isForStyling: true, cells: ['invisibleText'] }

                    ]
                }
            ]
        },
    ]

    const toggleButton = (planType) => {
        console.log(planType)
        switch (planType) {
            case 'Gold':
                return toggleGoldPlans;
            case 'Silver':
                return toggleSilverPlans;
            case 'Platinum':
                return togglePlatinumPlans;
            default:
                return () => { };
        }
    };

    // function cardClickHandler(item, index) {
    //     console.log(item, index);
    //     // document.querySelector(`plan-${index + 1}`)?.classList.add('selected-card');
    // }


    const isVisible = (planType) => {
        switch (planType) {
            case 'Gold':
                return goldPlanTable;
            case 'Silver':
                return silverPlanTable;
            case 'Platinum':
                return platinumPlanTable;
            default:
                return false;
        }
    };

    function selectedCard(item, index) {
        document.querySelector(`plan-${index + 1}`)?.classList.add("selected-card");
    }

    return (

        <ChargesSummaryWrapper>
            <div className="plans-container-wrapper">
                {plansArray.map((item, index) => {
                    return (
                        <div className={`plan-${index + 1} ${item.planType === recommendedPlan ? 'recommended-card' : 'charges-summary-wrapper-container'} ${item.planType === recommendedPlan ? 'recommended-card' : 'charges-summary-wrapper-container'}`} key={`wrapper-${index + 1}`} onClick={() => clickHandler(item, index)}>
                            <div className="chrges-summary-container">
                                <div className="plan-more-details">
                                    <table >
                                        <tbody key={`tbody-${index + 1}`}>
                                            <div className="first-styling">
                                                <tr>
                                                    <td className={`plan-${index + 1} plan-heading ${item.planType === recommendedPlan ? 'recommended-card-heading' : 'normal-card-heading'}`}
                                                    >{item.planType}</td>
                                                </tr>
                                                <tr>
                                                    <td>{item.planCost}</td>
                                                </tr>
                                                {item.planMoreDetailsBtn && item.planDetails.map((detail, detailIndex) => (
                                                    <tr key={`detail-${detailIndex}`}>
                                                        <td>{detail}</td>
                                                    </tr>
                                                ))}
                                            </div>
                                            {item.downloadTripButton &&
                                                <tr >
                                                    <td className='text-align-center'><button type='button' className={`${item.planType}-download-button download-details-button`}> Download details</button></td>
                                                </tr>
                                            }

                                            {/* Comented the below code as we are introducting three buttons and without the buttons, the UX would be much better as we don't need to click the button to see the details */}

                                            {/* {item.planMoreDetailsBtn &&
                                                <tr>
                                                    <td>
                                                        <button type="button" onClick={toggleButton(item.planType)}>
                                                            {isVisible(item.planType) ? 'Show less' : 'Show more'}
                                                        </button>
                                                    </td>
                                                </tr>
                                            } */}

                                            <tr>
                                                <td>
                                                    <table>
                                                        {item.planMoreDetails.map((i, innerIndex) => (
                                                            <React.Fragment key={`inner-${innerIndex}`}>
                                                                <thead>
                                                                    <tr>
                                                                        {i.headings.map((headingsObj, headingIndex) => (
                                                                            headingsObj.isHeading ? (
                                                                                <th key={`heading-${headingIndex}`}>
                                                                                    {headingsObj.headingText}
                                                                                </th>
                                                                            ) : null
                                                                        ))}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {i.rows.map((rowObj, rowIndex) => (
                                                                        rowObj.isRow ? (
                                                                            <tr key={`row-${rowIndex}`} >
                                                                                {rowObj.cells.map((cell, cellIndex) => (
                                                                                    <td key={`cell-${cellIndex}`}>{cell}</td>
                                                                                ))}
                                                                            </tr>
                                                                        ) : null
                                                                    ))}
                                                                </tbody>
                                                            </React.Fragment>
                                                        ))}
                                                    </table>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <td className={`${item.isForStyling ? 'styling-row' : ''}`}>
                                                    {item.planType}
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </ChargesSummaryWrapper >
    );
};

export default ChargesSummary;

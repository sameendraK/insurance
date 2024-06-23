import React, { FC, useContext, useState } from 'react';
import { ChargesSummaryWrapper } from './ChargesSummary.styled.ts'
interface ChargesFormProps { }

const ChargesSummary: FC<ChargesFormProps> = () => {
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
    const recommendedPlan: String = 'Gold';

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
                        { isRow: true, cells: ['Automatic travel cover extension', '21days'] }
                    ]
                }
            ]
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
                        { isRow: true, cells: ['Automatic travel cover extension', '21days'] }
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
                        { isRow: true, cells: ['Automatic travel cover extension', '21days'] }
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

    return (

        <ChargesSummaryWrapper>
            <div className="plans-container-wrapper">
                {plansArray.map((item, index) => {
                    return (
                        <div className={`plan-${index + 1} charges-summary-wrapper-container ${item.planType === recommendedPlan ? 'recommended-card' : ''}`} key={`wrapper-${index+1}`}>
                            <div className="chrges-summary-container">
                                <div className="plan-more-details">
                                    <table>
                                        <tbody key={`tbody-${index+1}`}>
                                            <tr className={`plan-${index+1}`}>
                                                <td>{item.planType}</td>
                                            </tr>
                                            <tr>
                                                <td>{item.planCost}</td>
                                            </tr>
                                            {item.planMoreDetailsBtn && item.planDetails.map((detail, detailIndex) => (
                                                <tr key={`detail-${detailIndex}`}>
                                                    <td>{detail}</td>
                                                </tr>
                                            ))}
                                            {item.downloadTripButton &&
                                                <tr>
                                                    <td><button type='button'> Download details</button></td>
                                                </tr>
                                            }
                                            {item.planMoreDetailsBtn &&
                                                <tr>
                                                    <td>
                                                        <button type="button" onClick={toggleButton(item.planType)}>
                                                            {isVisible(item.planType) ? 'Show less' : 'Show more'}
                                                        </button>
                                                    </td>
                                                </tr>
                                            }
                                            {isVisible(item.planType) && (
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
                                                                                <tr key={`row-${rowIndex}`}>
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
                                                </tr>)}
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

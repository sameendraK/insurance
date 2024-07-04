import React, { createContext, useState } from 'react';

// Create a context
export const FormContext = createContext();


// Create a provider component
export const FormProvider = ({ children }) => {
    const insuranceDropdownData = ['Individual', 'Group'];
    const visitingCountrieDropdownData = ['USA', 'India', 'UK']
    const tripTypeDropdownData = ['Single', 'Round']
    const [buttonData, setButtonData] = useState({ title: "Next", });
    const [selectedPlan, setSelectedPlan] = useState({})
    const allFields = [
        { name: "Insurance ", value: "", inputType: 'dropdown', dropdownData: insuranceDropdownData },
        { name: "Trip type", value: "", inputType: 'dropdown', dropdownData: tripTypeDropdownData },
        { name: "Number of insured", value: "", inputType: 'text' },
        { name: "Visiting", value: "", inputType: 'dropdown', dropdownData: visitingCountrieDropdownData },
        { name: "Start date", value: "", inputType: 'date' },
        { name: "End date", value: "", inputType: 'date' },
    ];

    const [currentFields, setCurrentFields] = useState(allFields.slice(0, 3));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLastField, setIsLastField] = useState('');
    const recordsPerPage = 3;

    const handleNextClick = () => {
        const nextIndex = currentIndex + recordsPerPage;
        if (nextIndex < allFields.length) {
            setCurrentFields(allFields.slice(nextIndex, nextIndex + recordsPerPage));
            setCurrentIndex(nextIndex);
            setButtonData({ title: "Continue" });
        } else {
            setIsLastField(true)
        }
    };

    const selectedPlanHandler = (item, index) => {
        console.log(item, index, "from fieldsContext.js");
        setSelectedPlan(item);
    }

    return (
        <FormContext.Provider value={{ allFields, buttonData, handleNextClick, isLastField, selectedPlanHandler,selectedPlan }}>
            {children}
        </FormContext.Provider>
    );
};

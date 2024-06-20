import React, { createContext, useState } from 'react';

// Create a context
export const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
    const [buttonData, setButtonData] = useState({ title: "Next", });
    const allFields = [
        { name: "Insurance ", value: "", inputType: 'dropdown' },
        { name: "Trip type", value: "", inputType: 'dropdown' },
        { name: "Number of insured", value: "", inputType: 'dropdown' },
        { name: "Visiting", value: "", inputType: 'dropdown' },
        { name: "Start date", value: "", inputType: 'dropdown' },
        { name: "End date", value: "", inputType: 'dropdown' },
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

    return (
        <FormContext.Provider value={{ allFields, buttonData, handleNextClick, isLastField }}>
            {children}
        </FormContext.Provider>
    );
};

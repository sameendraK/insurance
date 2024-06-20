import React, { FC, useContext } from 'react';
import { DetailsFormWrapper } from './DetailsForm.styled.ts';
import DetailsFormLeftPanel from '../DetailsFormLeftPanel/DetailsFormLeftPanel.tsx';
import DetailsFormRightPanel from '../DetailsFormRightPanel/DetailsFormRightPanel.tsx';
import AidenButton from '../AidenButton/AidenButton.tsx';
import { FormContext } from '../../context/fieldsContext.js';
import ChargesSummary from '../ChargesSummary/ChargesSummary.tsx';

interface DetailsFormProps { }

const DetailsForm: FC<DetailsFormProps> = () => {
   const { allFields, buttonData, handleNextClick, isLastField } = useContext(FormContext);

   return (
      <DetailsFormWrapper>
         <div className="display-flex">
            <DetailsFormLeftPanel />
            <DetailsFormRightPanel data={allFields} />
         </div>
         <AidenButton data={buttonData} />
         <button onClick={handleNextClick} disabled={isLastField}>Next</button>
         {isLastField && <ChargesSummary />}
      </DetailsFormWrapper>
   );
};

export default DetailsForm;

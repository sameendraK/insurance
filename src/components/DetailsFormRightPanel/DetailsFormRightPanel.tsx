import React, { FC } from 'react';
import { DetailsFormRightPanelWrapper } from './DetailsFormRightPanel.styled.ts';

interface DetailsFormRightPanelProps {
   data: {
      name: string;
   }[]
}

const DetailsFormRightPanel: FC<DetailsFormRightPanelProps> = ({ data }) => (
   <DetailsFormRightPanelWrapper>
       <div className="details-form-right-panel-wrapper-container">
         {data.map((item, index) => (
            <div key={index} className="details-form-right-panel-container">
               <input type='text' className="form-control" placeholder={item.name}/>
            </div>
         ))}
      </div>
   </DetailsFormRightPanelWrapper>
);

export default DetailsFormRightPanel;

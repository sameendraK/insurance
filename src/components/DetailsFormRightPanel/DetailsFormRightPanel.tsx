import React, { FC } from 'react';
import { DetailsFormRightPanelWrapper } from './DetailsFormRightPanel.styled.ts';

interface DetailsFormRightPanelProps {
   data: {
      name: string;
      inputType: string;
   }[]
}

const DetailsFormRightPanel: FC<DetailsFormRightPanelProps> = ({ data }) => {
   const halfWay = Math.ceil(data.length / 2);
   const firstHalf = data.slice(0, halfWay);
   const secondHalf = data.slice(halfWay, data.length);
   return (
      <DetailsFormRightPanelWrapper>
         <div className="right-panel-wrapper-container">
            <div className="details-form-right-panel-wrapper-container panel-1">
               {firstHalf.map((item, index) => (
                  <div key={index} className="details-form-right-panel-container first-panel">
                     <label htmlFor={item.name} className="label-class">{item.name}</label>
                     <input type='text' className="form-control" id={item.name} placeholder={item.name} />
                  </div>
               ))}
            </div>
            <div className="details-form-right-panel-wrapper-container panel-2">
               {secondHalf.map((item, index) => (
                  <div key={index} className="details-form-right-panel-container second-panel">
                     <label htmlFor={item.name} className="label-class">{item.name}</label>
                     {item.inputType === 'dropdown' && <input type='text' className="form-control" id={item.name} placeholder={item.name} />
                     }
                     <input type='text' className="form-control" id={item.name} placeholder={item.name} />
                  </div>
               ))}
            </div>
         </div>
      </DetailsFormRightPanelWrapper>
   );
};

export default DetailsFormRightPanel;

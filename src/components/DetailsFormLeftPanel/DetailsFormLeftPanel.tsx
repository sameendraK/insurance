import React, { FC } from 'react';
import { DetailsFormLeftPanelWrapper } from './DetailsFormLeftPanel.styled.ts';
import { MdOutlineCardTravel } from "react-icons/md";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { MdOutlineIncompleteCircle } from "react-icons/md";
interface DetailsFormLeftPanelProps {
   activeTab: number;
}

let isActiveTab: number;

const DetailsFormLeftPanel: FC<DetailsFormLeftPanelProps> = ({ activeTab }) => (
   <DetailsFormLeftPanelWrapper>
      <main className='height-width-100'>
         <div className="details-form-container-wrapper height-width-100 display-flex-align-items-center">
            <div className="details-form-container height-width-100 display-flex-align-items-center">
               <div className="nav-items-container">

                  {/* <ul className={`react-icons  ${activeTab === 0 ? 'active-tab' : ''}`}>
                     <li className={`react-icons  ${activeTab === 0 ? 'active-tab' : ''}`}>
                        <MdOutlineCardTravel />
                     </li>
                     <li className={`react-icon  ${activeTab === 0 ? 'active-tab' : ''}`}>
                        <BiSolidSelectMultiple />
                     </li>
                     <li className={`react-icon  ${activeTab === 0 ? 'active-tab' : ''}`}>
                        <MdOutlineIncompleteCircle />
                     </li>
                  </ul>
                  <ul className='nav-headings'>
                     <li className={`heading  ${activeTab === 0 ? 'active-tab' : ''}`}>
                        <p>Trip information</p>
                     </li>
                     <li className={`heading  ${activeTab === 0 ? 'active-tab' : ''}`}>
                        <p>Choose a plan</p>
                     </li>
                     <li className={`heading  ${activeTab === 0 ? 'active-tab' : ''}`}>
                        <p>Complete application</p>
                     </li>
                  </ul> */}

                  <section>

                     <div className="personal-info-wrapper-container">
                        <div className="personal-info-container logo-heading-container">
                           <div className={`logo-container container-1 ${activeTab === 0 ? 'active-tab' : 'inactive-tab'}`}>
                              <MdOutlineCardTravel />
                           </div>
                           <div className={`heading-name-container margin-left-16-px container-11 ${activeTab === 0 ? 'active-tab' : 'inactive-tab'}`}>
                              <h3 className={`${activeTab === 0 ? 'active-tab' : 'inactive-tab'}`}>Trip information</h3>
                           </div>
                        </div>
                     </div>
                  </section>
                  <section>

                     <div className="contact-info-wrapper-container">
                        <div className="contact-info-container logo-heading-container">
                           <div className={`logo-container container-1 ${activeTab === 1 ? 'active-tab' : 'inactive-tab'}`}>
                              <BiSolidSelectMultiple />
                           </div>
                           <div className={`heading-name-container margin-left-16-px container-2 ${activeTab === 1 ? 'active-tab' : 'inactive-tab'}`}>
                              <h3 className={`${activeTab === 1 ? 'active-tab' : 'inactive-tab'}`}>Choose a plan</h3>
                           </div>
                        </div>
                     </div>
                  </section>
                  <section>
                     <div className="payment-info-wrapper-container">
                        <div className="payment-info-container logo-heading-container">
                           <div className={`logo-container container-1 ${activeTab === 2 ? 'active-tab' : 'inactive-tab'}`}>
                              <MdOutlineIncompleteCircle />
                           </div>
                           <div className={`heading-name-container margin-left-16-px container-3 ${activeTab === 2 ? 'active-tab' : 'inactive-tab'}`}>
                              <h3 className={`${activeTab === 2 ? 'active-tab' : 'inactive-tab'}`}>Payment</h3>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </div>

      </main>
   </DetailsFormLeftPanelWrapper>
);

export default DetailsFormLeftPanel;

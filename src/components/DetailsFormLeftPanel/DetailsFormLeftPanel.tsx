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
      <main>
         <div className="details-form-container-wrapper">
            <div className="details-form-container">
               <div className="nav-items-container">

                  <ul className='react-icons'>
                     <li>
                        <MdOutlineCardTravel />
                     </li>
                     <li>
                        <BiSolidSelectMultiple />
                     </li>
                     <li>
                        <MdOutlineIncompleteCircle />
                     </li>
                  </ul>
                  <ul className='nav-headings'>
                     <li>
                        <p>Trip information</p>
                     </li>
                     <li>
                        <p>Choose a plan</p>
                     </li>
                     <li>
                        <p>Complete application</p>
                     </li>
                  </ul>

                  {/* <section>

                     <div className="personal-info-wrapper-container">
                        <div className="personal-info-container logo-heading-container">
                           <div className={`logo-container container-1 ${activeTab === 0 ? 'active-tab' : ''}`}>
                              <MdOutlineCardTravel />
                           </div>
                           <div className="heading-name-container margin-left-16-px container-1">
                              <h3>Trip information</h3>
                           </div>
                        </div>
                     </div>
                  </section>
                  <section>

                     <div className="contact-info-wrapper-container">
                        <div className="contact-info-container logo-heading-container">
                           <div className={`logo-container container-1 ${activeTab === 1 ? 'active-tab' : ''}`}>
                              <BiSolidSelectMultiple />
                           </div>
                           <div className="heading-name-container margin-left-16-px container-2">
                              <h3>Choose a plan</h3>
                           </div>
                        </div>
                     </div>
                  </section>
                  <section>
                     <div className="payment-info-wrapper-container">
                        <div className="payment-info-container logo-heading-container">
                           <div className={`logo-container container-1 ${activeTab === 2 ? 'active-tab' : ''}`}>
                              <MdOutlineIncompleteCircle />
                           </div>
                           <div className="heading-name-container margin-left-16-px container-3">
                              <h3>Complete Application</h3>
                           </div>
                        </div>
                     </div>
                  </section> */}
               </div>
            </div>
         </div>

      </main>
   </DetailsFormLeftPanelWrapper>
);

export default DetailsFormLeftPanel;

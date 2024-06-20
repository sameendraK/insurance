import logo from './logo.svg';
import './App.css';
import DetailsForm from './components/DetailsForm/DetailsForm.tsx';
import AidenButton from './components/AidenButton/AidenButton.tsx';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import DetailsFormLeftPanel from './components/DetailsFormLeftPanel/DetailsFormLeftPanel.tsx';
import DetailsFormRightPanel from './components/DetailsFormRightPanel/DetailsFormRightPanel.tsx';
import { FormContext } from './context/fieldsContext.js';
import React, { useState } from 'react';
import ChargesSummary from './components/ChargesSummary/ChargesSummary.tsx';
import PaymentForm from './components/PaymentPage/PaymentPage.tsx';

const App = () => {
  const { allFields } = React.useContext(FormContext);
  const [btnCount, setBtnCount] = useState(null);
  const [pageCount, setPageCount] = useState(0); // Initialize pageCount properly

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <DetailsFormLeftPanel />
          <div className="vertical-line" />
        </header>
        <main>
          <div className="main-div-container">
            <Routes>
              <Route path="/" element={<DetailsFormRightPanel data={allFields} />} />
              <Route path="/charges" element={<ChargesSummary />} />
              <Route path="/payment" element={<PaymentForm />} />
            </Routes>
          </div>
          <div className="button-container">
            {pageCount > 0 && <PreviousButton setPageCount={setPageCount} />}
            <NextButton btnCount={btnCount} setPageCount={setPageCount} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
  function NextButton({ btnCount, setBtnCount, setPageCount, }) {
    const navigate = useNavigate();
    console.log("In next btn")
    const handleNextClick = () => {
      setPageCount(count => (count || 0) + 1);
      console.log('btnCount', btnCount);
      if (pageCount === 1) {
        navigate('/charges');
      } else if (pageCount === 2) {
        navigate('/payment');
      }
    };

    return <button onClick={handleNextClick} className="btn">Next</button>;
  }

  function PreviousButton({ setPageCount }) {
    console.log("In Prev btn")
    const navigate = useNavigate();

    // const newCount = pageCount - 1;
    const handlePrevClick = () => {
      setPageCount(count => count - 1);
      if (pageCount === 1) {
        navigate('/');
      } else if (pageCount === 2) {
        navigate('/charges');
      }
      else if (pageCount === 3) {
        navigate('/payment');
      }
    };

    // return newCount;

    return <button onClick={handlePrevClick} className="btn">Previous</button>;
  }
};


export default App;

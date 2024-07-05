import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { FormContext } from './context/fieldsContext.js';
import DetailsFormLeftPanel from './components/DetailsFormLeftPanel/DetailsFormLeftPanel.tsx';
import DetailsFormRightPanel from './components/DetailsFormRightPanel/DetailsFormRightPanel.tsx';
import ChargesSummary from './components/ChargesSummary/ChargesSummary.tsx';
import PaymentForm from './components/PaymentPage/PaymentPage.tsx';
import './App.css';

const App = () => {
  const { allFields, activeTab } = React.useContext(FormContext);
  const [pageCount, setPageCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <DetailsFormLeftPanel activeTab={pageCount} />
          {/* <div className="vertical-line" /> */}
        </header>
        <main className="main-div-container">
          <Routes>
            <Route path="/" element={<DetailsFormRightPanel data={allFields} />} />
            <Route path="/charges" element={<ChargesSummary />} />
            <Route path="/payment" element={<PaymentForm />} />
          </Routes>
          <div className="button-container">
            {pageCount > 0 && <PreviousButton pageCount={pageCount} setPageCount={setPageCount} />}
            {pageCount < 2 && <NextButton pageCount={pageCount} setPageCount={setPageCount} />}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

function NextButton({ pageCount, setPageCount }) {
  const navigate = useNavigate();

  const handleNextClick = () => {
    setPageCount(count => count + 1);
    if (pageCount === 0) {
      navigate('/charges');
    } else if (pageCount === 1) {
      navigate('/payment');
    }
  };

  return <button onClick={handleNextClick} className="btn">Next</button>;
}

function PreviousButton({ pageCount, setPageCount }) {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    setPageCount(count => count - 1);
    if (pageCount === 1) {
      navigate('/');
    } else if (pageCount === 2) {
      navigate('/charges');
    }
  };

  return <button onClick={handlePrevClick} className="btn">Previous</button>;
}

export default App;

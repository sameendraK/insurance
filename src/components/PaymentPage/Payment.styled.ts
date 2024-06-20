import styled from 'styled-components';

export const PaymentSelectionWrapper = styled.div`
body {
  margin: 0;
  padding: 0;
  background-color: #e0f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;
}

.payment-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

.card-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.credit-card-form {
  width: 100%;
}

.credit-card-form form {
  display: flex;
  flex-direction: column;
}

.input-container {
  margin-bottom: 20px;
}

.half-width {
  width: calc(50% - 10px);
}

.credit-card-form input {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
}

.submit-button {
  padding: 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

@media (min-width: 768px) {
  .payment-form-container {
    flex-direction: row;
  }

  .credit-card-form {
    margin-left: 20px;
  }
}


`;

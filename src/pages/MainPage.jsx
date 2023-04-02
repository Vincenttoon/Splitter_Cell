import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import InputLines from "../components/UI/InputLines";
import TipChoice from "../components/UI/TipChoices";
import ReturnCalc from "../components/UI/ReturnCalc";
import ResetButton from "../components/UI/ResetButton";

function MainPage() {
  const tipAmounts = [5, 10, 15, 25, 50, "custom"];
  const [billTotal, setBillTotal] = useState("");
  const [totalPeople, setTotalPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState("0.00");
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");
  const [cleanTipPercentage, setCleanTipPercentage] = useState(false);
  const [billError, setBillError] = useState(false);
  const [personError, setPersonError] = useState(false);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(false);

  const handleBillChange = (event) => {
    setBillTotal(event.target.value);
  };

  const handleTipPercentageChange = (event) => {
    setTipPercentage(event.target.value);
  };

  const handlePeopleChange = (event) => {
    setTotalPeople(event.target.value);
  };

  const calculateTipPerPerson = (bill, tipPercentage, persons) => {
    return (bill * (tipPercentage / 100) / persons);
  };

  const calculateTotalPerPerson = (bill, persons, tipPerPerson) => {
    return (bill / persons) + tipPerPerson;
  };

  const handleResetClick = () => {
    setBillTotal("");
    setTotalPeople("");
    setTipPercentage("");
    setTipPerPerson("0.00");
    setTotalPerPerson("0.00");
    setCleanTipPercentage(!cleanTipPercentage);
    cleanErrors();
    setResetButtonDisabled(true);
  };

  const cleanErrors = () => {
    setBillError(false);
    setPersonError(false);
  };

  const validateInput = (event) => {
    if (event.target.id === "bill-input") {
      setBillError(false);
    } else {
      setPersonError(false);
    }

    if (event.target.value === "") {
      return event.target.id === "bill-input"
        ? setBillError(true)
        : setPersonError(true);
    }
  };

  const calculateAll = () => {
    const calcTipPerPerson = calculateTipPerPerson(
      billTotal,
      tipPercentage,
      totalPeople
    );
    const calcTotalPerPerson = calculateTotalPerPerson(
      billTotal,
      totalPeople,
      calcTipPerPerson
    );

    setTipPerPerson(calcTipPerPerson.toFixed(2));
    setTotalPerPerson(calcTotalPerPerson.toFixed(2));
  };

  useEffect(() => {
    if (totalPeople && billTotal && tipPercentage) {
      setResetButtonDisabled(false);
      calculateAll();
    }
  }, [totalPeople, billTotal, tipPercentage]);

  return (
    <>
      <header className="main-div">
        <img src={logo} alt="main Splitter logo" />
      </header>

      <main>
        <div className="input-section">
          <InputLines
            id="bill-input"
            label="Bill"
            icon="dollar-icon"
            value={billTotal}
            error={billError}
            onChange={handleBillChange}
            onBlur={validateInput}
          />

          <TipChoice
            tips={tipAmounts}
            className="tip-class"
            onChange={handleTipPercentageChange}
            cleanTipPercentage={cleanTipPercentage}
          />

          <InputLines
            id="input-input"
            label="Number of People"
            icon="person-icon"
            className="IL-class"
            value={totalPeople}
            error={personError}
            onChange={handlePeopleChange}
            onBlur={validateInput}
          />
        </div>

        <div className="return-calc-section">
          <div className="return-calc-container">
            <ReturnCalc
              title="Tip Amount"
              amount={tipPerPerson}
              className="tip-per"
            />
            <ReturnCalc
              id="total-per-person"
              title="Total"
              amount={totalPerPerson}
              className="per-person"
            />
          </div>
          <ResetButton
            disabled={resetButtonDisabled}
            id="reset-button"
            className="reset-button"
            onClick={handleResetClick}
          />
        </div>
      </main>
    </>
  );
}

export default MainPage;

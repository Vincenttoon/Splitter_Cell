import React, { useState, useEffect } from "react";
import logo from '../images/logo.svg'
import InputLines from "../components/UI/InputLines";
import TipChoice from "../components/UI/TipChoices";
import ReturnCalc from "../components/UI/ReturnCalc";
import ResetButton from "../components/UI/ResetButton";

function MainPage() {

    const tipAmounts = [5, 10, 15, 25, 50, 'custom']
    const [billTotal, setBillTotal] = useState('');
    const [totalPeople, setTotalPeople] = useState('');
    const [tipPercentage, setTipPercentage] =  useState('');
    const [tipPerPerson, setTipPerPerson] = useState('0.00');
    const [totalPerPerson, setTotalPerPerson] = useState('0.00');
    const [cleanTipPercentage, setCleanTipPercentage] = useState(false);
    const [billError, setBillError] = useState(false);
    const [personError, setPersonError] = useState(false);
    const [resetButtonDisabled, setResetButtonDisabled] = useState(false);

    const handleBillChange = (event) => {
        setBillTotal(event.target.value);
    }

    const handleTipPercentageChange = (event) => {
        setTipPercentage(event.target.value);
    }

    const handlePeopleChange = (event) => {
        setTotalPeople(event.target.value);
    }

    


    return (
        <div className="main-div">
            <img src={ logo } alt="main Splitter logo" />
            <div className="AppContent">
            </div>
        </div>
    )
}

export default MainPage

import React from 'react'

const ReturnCalc = (props) => {
    return (
        <div className={`return-container ${props.className}`}>
            <div className='return-detail'>
                <span className='return-title'>{props.title}</span>
                <span className='return-single'>/ person</span>
            </div>
            <span>${props.amount}</span>
        </div>
    );
};

export default ReturnCalc;
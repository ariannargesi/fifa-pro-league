import React from 'react'

const Stepper = ({ currentStep, children }) => {
    return (
        <>
        {children[currentStep]}
        </>
    )
}

export default Stepper 

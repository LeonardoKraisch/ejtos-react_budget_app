import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, remaining, currency } = useContext(AppContext);
    
    const [updateBudget, setUpdateBudget] = useState(budget)

    const changeBudget = (value) => {
        if (value > 20000) {
            alert("The value cannot exceed " + currency + 20000);
            setUpdateBudget(budget);
            return;
        }

        if (remaining <= 0) {
            alert("The value of your budget cannot be lower than the spending");
            setUpdateBudget(budget);
            return;
        }

            dispatch({
                type: 'SET_BUDGET',
                payload: value > budget ? (budget + 10) : (budget - 10)
            });
            setUpdateBudget(value > budget ? (budget + 10) : (budget - 10))
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{<input
                required='required'
                type='number'
                id='cost'
                value={updateBudget}
                style={{ size: 10 }}
                onChange={(event) => changeBudget(event.target.value)}
                >
            </input>}</span>
        </div>
    );
};
export default Budget;

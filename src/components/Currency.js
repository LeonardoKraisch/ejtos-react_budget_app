import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='alert bg-success'>
            <label style={{color: 'white'}}>Currency: </label>
            <select defaultValue={currency} className='bg-success text-white form-select form-select-sm selectpicker' onChange={event => changeCurrency(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="₹">₹ Ruppee</option>
                <option value="€">€ Euro</option>
                <option value="$">$ Dollar</option>
            </select>
        </div>
    );
};

export default Currency;
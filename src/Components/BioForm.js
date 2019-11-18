import React from 'react';
// import useForm from '../Utils/useForm';

const BioForm = () => {

    return (
        <div>
            <form>
                <p>Name:</p>
                <input type = 'text' placeholder = 'name'/>
                <p>Gender:</p>
                <select>
                    <option>Please Choose an Option</option>
                    <option value = 'female'>Female</option>
                    <option value = 'male'>Male</option>
                </select>
                <p>Age:</p>
                <input type = 'text' placeholder = 'age'/>
                <div>
                    <select>Ft
                        <option value = '1'>1 ft</option>
                        <option value = '2'>2 ft</option>
                        <option value = '3'>3 ft</option>
                        <option value = '4'>4 ft</option>
                        <option value = '5'>5 ft</option>
                        <option value = '6'>6 ft</option>
                        <option value = '7'>7 ft</option>
                    </select>
                    <select>
                    <option value = '1'>1 in</option>
                        <option value = '2'>2 in</option>
                        <option value = '3'>3 in</option>
                        <option value = '4'>4 in</option>
                        <option value = '5'>5 in</option>
                        <option value = '6'>6 in</option>
                        <option value = '7'>7 in</option>
                        <option value = '8'>8 in</option>
                        <option value = '9'>9 in</option>
                        <option value = '10'>10 in</option>
                        <option value = '11'>11 in</option>
                        <option value = '12'>12 in</option>
                    </select>
                </div>
                <input type = 'text' placeholder = 'weight'/>
                <p>Exercise Amount:</p>
                <select>
                    <option value = 'none'>0 days per week</option>
                    <option value = 'light'> 1-2 days per week</option>
                    <option value = 'medium'>3-4 days per week</option>
                    <option value = 'moderate'>5-6 days per week</option>
                    <option value = 'heavy'>7 days per week</option>
                </select>
                <p>Goals</p>
                <select>
                    <option value = 'aggressive'>Aggressive Weight Loss (20% deficit)</option>
                    <option value = 'moderate'>Moderate Weight Loss (15% deficit)</option>
                    <option value = 'light'>Light Weight Loss (10% deficit)</option>
                    <option value = 'maintain'>Maintain Current Weight</option>
                    <option value = 'moderate-gain'>Moderate Weight Gain (10% surplus)</option>
                    <option value = 'aggressive-gain'>Aggressive Weight Gain (15% surplus)</option>
                </select>

            </form>
        </div>

    )

}

export default BioForm;
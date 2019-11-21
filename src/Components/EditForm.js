import React,{useState,useEffect} from 'react';
import Header from './Header';
import styled from 'styled-components';
import {month, days, year, feets, inches, meals} from './data.js';
import { connect } from "react-redux"
import { editData } from "../Redux/UserStats/userStatsActions";



const BioForm = (props) => {
    const userValues = {
        gender: props.userInfo.gender,
        height: props.userInfo.height,
        weight: props.userInfo.weight,
        activity_factor: props.userInfo.activity_factor,
        meals_per_day: props.userInfo.meals_per_day, 
        snacks_per_day: props.userInfo.snacks_per_day,
        goal_multiplier: props.userInfo.goal_multiplier,
        birthdate_day: props.userInfo.birthdate_day,
        birthdate_month: props.userInfo.birthdate_month,
        birthdate_year: props.userInfo.birthdate_year
    }

    
    const [formValues , setFormValues] = useState(userValues)
    const [height , setHeight] = useState({feet: 0 , inches: 0})
    const [mealss , setMeals] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        props.editData(props.userInfo.id,formValues,props.history)
    }
    console.log(formValues)

    useEffect(()=>{
        const feet = Math.floor(formValues.height / 12)
        const inches = formValues.height % 12
        setHeight({feet,inches})

        if(userValues.meals_per_day === 3 && userValues.snacks_per_day === 0){
            setMeals("3 meals per day")
        } else if(userValues.meals_per_day === 4){
            setMeals("4 meals per day")
        } else if(userValues.snacks_per_day === 2){
            setMeals("3 meals + 2 snacks per day")
        }
    },[])
 
    useEffect(()=>{
        if(height.feet !== 0){
        const totalHeight = height.feet * 12 + height.inches
        setFormValues({...formValues, height: totalHeight})
        }
    },[height])

    useEffect(()=>{
        if(mealss === "3 meals per day"){
            setFormValues({...formValues, snacks_per_day: 0 , meals_per_day: 3})
        } else if(mealss === "4 meals per day"){
            setFormValues({...formValues, snacks_per_day: 0 , meals_per_day: 4})
        } else if(mealss === "3 meals + 2 snacks per day"){
            setFormValues({...formValues, snacks_per_day: 2 , meals_per_day: 3})
        }
    },[mealss])

    const handleMeals = (e) => {
        if(e.target.value === "3 meals per day"){
            setMeals(e.target.value)
        } else if(e.target.value === "4 meals per day"){
            setMeals(e.target.value)
        } else if(e.target.value === "3 meals + 2 snacks per day"){
            setMeals(e.target.value)
        }
    }

    

    const handleChange = (e) => {
        e.persist()
        if(e.target.name === "gender"){
            setFormValues({...formValues,[e.target.name]:e.target.value})
        }  else {
            setFormValues({...formValues,[e.target.name]:e.target.value})
        }
    }

    const handleHeight = (e) => {
        setHeight({...height, [e.target.name] : Number(e.target.value)})
    }
    
    console.log(formValues.height,formValues.height % 12)
    console.log(formValues);
    return (
        <>
        <Header />
        <BioFormContainer className= 'login'>
            <h2>Personal Info:</h2>
            <form  onSubmit={submitHandler}> 
                <div className = 'birthdate'>
                    <h3>Birthdate:</h3>
                    <div className = 'birthdate-inputs'>
                        <select className = 'month' onChange={handleChange} name="birthdate_month" required value={formValues.birthdate_month}>
                            <option value="" required>Month</option>
                            {month.map((mon,index)=>(<option key={index} value={mon.monthNumber} >{mon.monthString}</option>))}
                        </select>
                        <select onChange={handleChange} name="birthdate_day" required value={formValues.birthdate_day}>
                            <option value="" >Day</option>
                            {days.map((d, index )=> (<option key = {index} value = {d}>{d}</option>))}
                        </select>
                        <select onChange={handleChange} name="birthdate_year" required value={formValues.birthdate_year}>
                            <option value="">Year</option>
                            {year.map((y,index)=>(<option key={index} value={y}>{y}</option>))}
                        </select>
                    </div>
                </div>
                <div className = 'height'>
                    <h3>Height: </h3>
                    <div className = 'height-inputs'>
                        <select onChange={handleHeight} className = 'left' name="feet" required value={(height.feet)}>Ft
                            <option value="">Feet</option>
                            {feets.map((f, index) => (<option key = {index} value = {f}>{f} ft</option>))}
                        </select>
                        <select onChange={handleHeight} className = 'right' name="inches" required value={height.inches % 12}>
                            <option value="" required>Inches</option>
                            {inches.map((inch,index)=>(<option key={index} value={inch}>{inch} in</option>))}
                        </select>
                    </div>
                </div>
                <div className = 'single-line'>
                    <h3>Weight:</h3>
                    <input className = 'input' type = 'text' value= {formValues.weight} name="weight" onChange={handleChange} required />
                <div className = 'single-line'>   
                    <h3>Gender: </h3>
                    <select name="gender" onChange={handleChange} required value={formValues.gender}>
                        <option value="">Please Choose An Option</option>
                        <option value = 'female'>Female</option>
                        <option value = 'male'>Male</option>
                    </select>
                </div>   
                <div className = 'single-line'>  
                    <h3>Exercise Amount:</h3>
                    <select name="activity_factor" onChange={handleChange} required value={formValues.activity_factor}>
                        <option value="">Please Choose An Option</option>
                        <option value = '1.2'>0 days per week</option>
                        <option value = '1.375'> 1-2 days per week</option>
                        <option value = '1.55'>3-4 days per week</option>
                        <option value = '1.725'>5-6 days per week</option>
                        <option value = '1.9'>7 days per week</option>
                    </select>
                </div>
                <div className = 'single-line'>
                    <h3>Goals</h3>
                    <select onChange={handleChange} name="goal_multiplier" required value={formValues.goal_multiplier}>
                        <option value="">Please Choose An Option</option>
                        <option value = {0.8}>Aggressive Weight Loss (20% deficit)</option>
                        <option value = {0.85}>Moderate Weight Loss (15% deficit)</option>
                        <option value = {0.9}>Light Weight Loss (10% deficit)</option>
                        <option value = {1}>Maintain Current Weight</option>
                        <option value = {1.1}>Moderate Weight Gain (10% surplus)</option>
                        <option value = {1.15}>Aggressive Weight Gain (15% surplus)</option>
                    </select>
                    </div>
                <div>
                    <h3>How Many Meals Per Day?</h3>
                    <select onChange={handleMeals} required value={mealss}>
                        <option value="">Please Choose An Option</option>
                        {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                    </select>
                </div>    
                </div>
                    <button className='continue'>Continue</button>
                
            </form>
            
        </BioFormContainer>
        </>
    )

}

const mapStateToProps = state => ({
    userInfo: state.userStats.userStatsObj
})


export default connect(mapStateToProps,{editData})(BioForm)


const BioFormContainer = styled.div`
    height: 60%;
    width: 95%;
    
    padding-bottom: 5%;
    margin: 0 auto;
    h2 {
    font-size: 4rem;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        width: 100%;

        .birthdate {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 20%;
            
            h3 {
                display: flex;
                justify-content: flex-start;
                // padding-left: 2%;
                font-size: 2rem;
                font-family: 'Raleway', sans-serif;
            }
            .birthdate-inputs {
                display: flex;
                justify-content: center;

            select {
                display: flex;
                width: 33%;
                padding: 1% 1%;
                margin: 0 auto;
            }
            }
        }
        .height{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 67%;
            height: 20%;

            h3 {
                display: flex;
                justify-content: flex-start;
                font-size: 2rem;
                font-family: 'Raleway', sans-serif;
            }
            .height-inputs {
                display: flex;
                width:  100%;
                justify-content: space-between;
                
    

                .left {
                    width: 49.5%;
                    margin-right: 0.5%;
                    padding: 1% 1%;
                }
                .right {
                    width: 49.5%;
                    margin-right: 0.5%; 
                    padding: 1.5% 1%;
                    
                }
            }
        }
        .single-line {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            height: 40%;
            margin: 0 auto;
           

            h3 {
                display: flex;
                justify-content: flex-start;
                font-size: 2rem;
                font-family: 'Raleway', sans-serif;
                
            }
            .input, select {
                display: flex; 
                justify-content: flex-start; 
                width: 100%;
                padding: 1% 1%;
                margin: 0 auto;
            }   
            
        }
        .continue {
            display: flex;
            justify-content: center;
            border: none;
            width: 100%;
            background: white;
            border-radius: 4px;
            border: #db7c1e solid 1px;
            padding: 1%;
            font-family: 'Raleway', sans-serif;

            &:hover{
                background: #db7c1e;
            }
        }
    }
`

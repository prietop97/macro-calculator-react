import React from 'react';
import {meals} from './data';
import Header from './Header';
import styled from 'styled-components';
import yogurtgranolafruit from '../img/yogurtgranolafruit.jpg';




const SnacksAndMeals = () => {

    return (
        <><Content>
        <Header />
        
        <div>
            <SAMContainer>
                <h2>Snacks And Meals </h2>
                <form>
            <div>
                <h3>Monday</h3>
                <select>
                    {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Tuesday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Wednesday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Thursday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Friday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Saturday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Sunday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <button>Done</button>
            </form>
            </SAMContainer>
            
        </div>
        </Content>
        </>
    )
}

const Content = styled.div`
    background-image: url(${yogurtgranolafruit});
    height: 1300px;
    width: 100%;
    opacity: 60%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: right;
    padding-top: 5%;

`;



const SAMContainer = styled.div`
    height: 60vh;
    width: 100%;
    padding: 0% 10% 10% 5%;
    opacity: 100%;

    div {
        display: flex;

        padding: 2%;
    }
    
    h2{
        
        font-size: 4rem;
        width: 100%;
        font-family: 'Raleway', sans-serif;
        padding: 2%;
    }

    form {
        
        
        margin: 0 auto;
        width: 100%;
        padding-bottom: 5%;
        

        h3 {
            
            
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
            padding-bottom: 1%;
            padding-top: 1%;
        }

        select {
            align-self: flex-end;
            width: 40%;
            height: 80%;
            padding: 1% 1%;
            margin: 0 auto;
            border: 1px solid black;
            border-radius: 4px;
            box-shadow: none;
        }
    }

    button {
        display: flex;
        justify-content: center;
        width: 100%;
        background: white;
        border-radius: 4px;
        border: #db7c1e solid 1px;
        padding: 1%;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 2%;

        &:hover{
            background: #db7c1e;
            color: white;
        }
    }  


  
`

export default SnacksAndMeals
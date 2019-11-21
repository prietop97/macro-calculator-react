import React from 'react';
import styled from 'styled-components';

//components
import Meals from './Meals/Meals';
import Snacks from './Meals/Snacks';
import eggandvegis from '../img/eggandvegis.jpg';
import chickenandpeppers from '../img/chickenandpeppers.jpg';
import salmononspinich from '../img/salmononspinich.jpg';
import yogurtgranolafruit from '../img/yogurtgranolafruit.jpg';
import trailmixbowl from '../img/trailmixbowl.jpg';
import salmon from '../img/salmon.jpg'

const TwoSnacks = (props) => {

    return(
        <TwoSnacksContainer>
            <div className='meals'>
                <Meals mealNumber = '1' img={salmon}/>
                <Meals mealNumber = '2' img={chickenandpeppers}/>
                <Meals mealNumber = '3' img={salmononspinich}/>
            </div>

            <div className='snacks'>
                <Snacks snackNumber = '1' img={eggandvegis} />
                <Snacks snackNumber = '2' img={trailmixbowl} />
                
            </div>            
        </TwoSnacksContainer>
    )
}


export default TwoSnacks;

const TwoSnacksContainer = styled.div`
    display: flex;
    width: 100%;

    .meals{
        width: 40%;
        flex-direction: column;
    }

    .snacks{
        width: 40%;
        display: flex;
        flex-direction: column;
        margin: auto 0;
    }
`


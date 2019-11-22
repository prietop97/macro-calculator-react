import React from 'react';
import styled from 'styled-components';

//components
import Meals from './Meals/Meals';
import salmononspinich from '../img/salmononspinich.jpg';
import eggandvegis from '../img/eggandvegis.jpg';
import salmon from '../img/salmon.jpg';
import chickenandpeppers from '../img/chickenandpeppers.jpg';

const FourMeals = (props) => {

    return(
        <FourMealsContainer>
            <div className='top'>
                <div>
                    <Meals mealNumber = '1' img={salmononspinich} />
                </div>
                <div>
                    <Meals mealNumber = '2' img={salmon} />
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <Meals mealNumber = '3' img={eggandvegis} />
                </div>
                <div>
                    <Meals mealNumber = '4' img={chickenandpeppers} /> 
                </div>
            </div>
        </FourMealsContainer>
    )
}

export default FourMeals;

const FourMealsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .top{
        display: flex;
        padding-bottom: 15%;

        div{
            width: 80%;
            margin: 0 auto;
        }
    }

    .bottom{
        display: flex;

        div{
            width: 80%;
            margin: 0 auto;
        }
    }
`
import React from 'react';
import styled from 'styled-components';

//components
import Meals from './Meals/Meals';
import salmononspinich from '../img/salmononspinich.jpg';
import eggandvegis from '../img/eggandvegis.jpg';
import salmon from '../img/salmon.jpg';

const ThreeMeals = props => {
  return (
    <ThreeMealsContainer>
      <div className="left">
        <div className="one">
          <Meals mealNumber="1" img={salmononspinich} />
        </div>
        <div>
          <Meals mealNumber="2" img={eggandvegis} />
        </div>
      </div>
      <div className="right">
        <Meals mealNumber="3" img={salmon} />
      </div>
    </ThreeMealsContainer>
  );
};

export default ThreeMeals;

const ThreeMealsContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  .left {
    width: 40%;
    flex-direction: column;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
      width: 100%;
      margin: 0;
    }

    .one {
      padding-bottom: 25%;
      @media screen and (max-width: 1000px) {
        padding: 0;
      }
    }

    .right {
      width: 40%;
      margin: auto 0;
      @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 0;
      }
    }
  }
`;

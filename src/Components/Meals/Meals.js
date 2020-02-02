import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Meals = props => {
  return (
    <MealsContainer>
      <div className="macros">
        <h2>Meal {props.mealNumber}:</h2>
        <h4>Protein: {props.userInfo.mealProtein} g</h4>
        <h4>Fats: {props.userInfo.mealFats} g</h4>
        <h4>Carbs: {props.userInfo.mealCarbs} g</h4>
      </div>
      <div className="image">
        <img src={props.img} alt="yum" />
      </div>
    </MealsContainer>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userStats.Macros
});
export default connect(mapStateToProps)(Meals);

const MealsContainer = styled.div`
  display: flex;
  width: 80%;
  padding-bottom: 5%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  .macros {
    width: 50%;
    flex-direction: column;
    @media screen and (max-width: 600px) {
      width: 100%;
    }

    h2 {
      font-size: 2rem;
      font-family: 'Raleway', sans-serif;
    }
    h4 {
      font-size: 2rem;
      font-family: 'Raleway', sans-serif;
      color: #4f4f4f;
    }
  }

  .image {
    width: 50%;

    img {
      width: 210px;
      height: 150px;
    }
  }
`;

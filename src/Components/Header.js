import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='ui centered'>
        <div className = 'flexHeader'>
      <Link to='/'>
      <h1 className='ui center'>Macro Calculator</h1>
      </Link>
      <Link to='/SignUp'>
      <h1 className='ui left'>SignUp</h1>
      </Link>
      <Link to='/Login'>
      <h1 className='ui left'>Login</h1>
      </Link>
      <Link to='/Biometrics'>
      <h1 className='ui left'>Biometrics</h1>
      </Link>
      <Link to='/Dashboard'>
      <h1 className='ui left'>Dashboard</h1>
      </Link>
      <div>
      <h1>
      <a href='https://macroculator.github.io/Marketing-page/'>Marketing</a></h1>
      <h1>
      <a href='https://www.figma.com/file/LvRxDMLni5Upylszi1gG2G/Macro-Calculator-(1)?node-id=420%3A2280'>Figma</a></h1>
      <h1>
      <a href='https://trello.com/b/b0vU37Jp/build-week-project-macro-calculator'>Trello</a></h1>
      </div>
      <Link to='/SnacksAndMeals'>
      <h1 className='ui left'>SnacksAndMeals</h1>
      </Link>
      <Link to='/WelcomePage'>
      <h1 className='ui left'>WelcomePage</h1>
      </Link> 
      </div>
    </header>
  );
}

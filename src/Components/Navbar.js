import React,{useState} from 'react'
import styled from "styled-components"
import {withRouter} from "react-router-dom"
import largeLogo from '../img/largeLogo.png';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleClick = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
        <NavContainer>
            <LinkContainer>
                <MyLink>
                    <a href="https://infallible-albattani-8d730d.netlify.com/"> 
                        <img src={largeLogo} alt="large logo" className='something'/>
                    </a>
                </MyLink>
            </LinkContainer>
            <Title>Dashboard</Title>
            <Icon onClick={handleClick} className="fas fa-bars"></Icon>
        </NavContainer>
        <ModifiedNavBar toggleMenu={toggleMenu}/>  
        </>
    )
}

const NavBarMenu = ({toggleMenu,history}) => {

    return (
        <div className={`${toggleMenu ? "" : "hide"} nav-bar-menu`} id="Nav-Bar-Menu">
            <a href="https://infallible-albattani-8d730d.netlify.com/"><h1 style={{cursor: "pointer",padding: "2rem"}}>HOME</h1></a>
            <h1 style={{cursor: "pointer",padding: "2rem"}} onClick={()=>{
                history.push("/Edit")
            }}>EDIT DIET</h1>

            

            <h1 style={{cursor: "pointer",padding: "2rem"}} onClick={()=>{
                localStorage.clear()
                history.push("/")
            }}>LOG OUT</h1>

        </div>
    )
}

const ModifiedNavBar = withRouter(NavBarMenu)


const NavContainer = styled.div `
    height: 5rem;
    background: #db7c1e;
    width: 100%;
    color: white;
    align-items: center;
    text-align: center;
`

const Title = styled.h2 `
    font-size: 3rem;
    padding-top: 0.5rem;
`

const Icon = styled.i `
    font-size: 2.7rem;
    position: absolute;
    top: 10px;
    right: 5px;
    &:hover{
        cursor: pointer;
    }
`
const LinkContainer = styled.div`
    font-size: 2.7rem;
    position: absolute;
    top: 5px;
    left: 100px;
`

const MyLink = styled.div`
    text-decoration: none;

    img{

        width: 40px;
        height: 40px;
    }

`

import React,{useState} from 'react'
import styled from "styled-components"

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleClick = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
        <NavContainer>
            <Title>Dashboard</Title>
            <Icon onClick={handleClick} className="fas fa-bars"></Icon>
        </NavContainer>
        <NavBarMenu toggleMenu={toggleMenu}/>  
        </>
    )
}

const NavBarMenu = ({toggleMenu}) => {

    return (
        <div className={`${toggleMenu ? "" : "hide"} nav-bar-menu`} id="Nav-Bar-Menu">
            <h2>HEY</h2>
        </div>
    )
}


const NavContainer = styled.div `
    height: 5rem;
    background: red;
    width: 100%;
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
`

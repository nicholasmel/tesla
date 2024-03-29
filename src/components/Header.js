import React from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import teslaicon from '../images/tesla.svg'

function Header() {
    const history = useHistory();

    return (
        <Container>
            <a onClick={() => history.push('/')}>
                <img src={teslaicon} alt="" />
            </a>
            <Menu>
                <p onClick={() => history.push('/model-s')}>Model S</p>
                <p onClick={() => history.push('/model-3')}>Model 3</p>
                <p onClick={() => history.push('/model-X')}>Model X</p>
                <p onClick={() => history.push('/model-Y')}>Model Y</p>
                <p>Solar Roofs</p>
                <p>Solar Panels</p>
            </Menu>
            <RightMenu>
                <p>Shop</p>
                <p>Account</p>
                <p>Menu</p>
            </RightMenu>
        </Container >
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;
    top: 0; 
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p {
        font-weight: 500;
        padding: 0 15px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px) {
        display:none;
    }
        cursor: pointer;
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    p {
        font-weight: 500;
        padding: 0 15px;
    }
    flex-wrap: no-wrap;
    cursor: pointer;
`
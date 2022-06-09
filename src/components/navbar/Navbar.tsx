import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
    font-family: 'Josefin Sans';
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
`;

const NavButton = styled.li`
    margin-left: 40px;
    transition: background-color 0.2s ease;
    height: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #f48fb1;
    }
`;

const NavText = styled.span`
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
`;

const NavBar = styled.nav<{ isScrolled: boolean }>`
    height: 50px;
    background-color: #f8bbd0;
    margin: 0;
    position: fixed;
    top: 0;
    width: 100%;
    transition: opacity 0.25s ease;
    z-index: 100;

    opacity: ${props => (props.isScrolled ? '0.75' : '1')};
`;

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrolled(window.scrollY >= 40);
        });
    }, []);

    return (
        <NavBar isScrolled={isScrolled}>
            <NavList>
                <NavButton onClick={() => navigate('/')}>
                    <NavText>Home</NavText>
                </NavButton>
                <NavButton onClick={() => navigate('/about')}>
                    <NavText>About</NavText>
                </NavButton>
            </NavList>
        </NavBar>
    );
}

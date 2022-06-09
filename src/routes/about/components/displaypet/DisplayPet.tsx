import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { PetObj } from '../../../home/components/pet/Pet';
import { DisplayPetObj } from '../about/About';

const PetContainer = styled.li`
    background-color: #f48fb1;
    break-inside: avoid;
    border-radius: 20px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;
    max-width: 300px;
    list-style: none;
`;

const PetBackground = styled.div`
    background-color: #f8bbd0;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    left: 10px;
    top: 10px;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
`;

const PetTextContainer = styled.div`
    padding: 0 25px 25px 25px;
    z-index: 2;
    position: relative;
`;

const PetImage = styled.img`
    width: 100%;
    border-radius: 10px;
    display: inline;
    z-index: 2;
    position: relative;
`;

const PetTitle = styled.p`
    margin-top: 20px;
    margin-bottom: 0;
    font-family: 'Josefin Sans';
    font-weight: 300;
    font-size: 40px;
`;

const PetDescription = styled.p`
    font-family: 'Signika Negative';
    margin-top: 10px;
    margin-bottom: 0;
`;

export function DisplayPet(props: { pet: DisplayPetObj }) {
    return (
        <PetContainer>
            <PetBackground></PetBackground>
            <PetImage src={props.pet.url}></PetImage>
            <PetTextContainer>
                <PetTitle>{props.pet.title}</PetTitle>
                <PetDescription>{props.pet.description}</PetDescription>
            </PetTextContainer>
        </PetContainer>
    );
}

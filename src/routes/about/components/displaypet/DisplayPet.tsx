import React from 'react';
import styled from 'styled-components';
import {
    PetBackground,
    PetDescription,
    PetImage,
    PetTextContainer,
    PetTitle,
} from '../../../../components/common-styles';
import { DisplayPetObj } from '../about/About';

const PetContainer = styled.li`
    background-color: #f48fb1;
    break-inside: avoid;
    border-radius: 20px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;
    list-style: none;
    margin: 0;
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

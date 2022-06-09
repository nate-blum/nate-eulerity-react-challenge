import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
    PetBackground,
    PetDescription,
    PetImage,
    PetTextContainer,
    PetTitle,
} from '../../../../components/common-styles';
import { selectPS, updateSelectedPets } from '../../homeSlice';

const PetListItem = styled.li<{ isSelected: boolean }>`
    margin-bottom: 20px;
    background-color: ${props => (props.isSelected ? '#90CAF9' : '#f48fb1')};
    transition: background-color 0.4s ease;
    border-radius: 20px;
    break-inside: avoid;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;
    cursor: pointer;
`;

const PetBackgroundSel = styled(PetBackground)<{ isSelected: boolean }>`
    background-color: ${props => (props.isSelected ? '#BBDEFB' : '#f8bbd0')};
    transition: background-color 0.4s ease;
`;

const PetTimeStamp = styled.p`
    font-family: 'Signika Negative';
    margin: 0;
    font-size: 13px;
    color: #424242;
`;

export function Pet(props: { pet: PetObj; id: number }) {
    const dispatch = useAppDispatch();
    const petsSelected = useAppSelector(selectPS);

    const selected = (event: any, id: number) => {
        event.preventDefault();
        dispatch(updateSelectedPets(id));
    };

    return (
        <PetListItem isSelected={petsSelected.indexOf(props.id) > -1} onClick={(e: any) => selected(e, props.id)}>
            <PetBackgroundSel isSelected={petsSelected.indexOf(props.id) > -1}></PetBackgroundSel>
            <PetImage src={props.pet.url}></PetImage>
            <PetTextContainer>
                <PetTimeStamp>
                    Photo Created:{' '}
                    {moment(props.pet.created, 'ddd MMM DD kk:mm:ss z YYYY').format('h:mm a, dddd, MMM. D, YYYY')}
                </PetTimeStamp>
                <PetTitle>{props.pet.title}</PetTitle>
                <PetDescription>{props.pet.description}</PetDescription>
            </PetTextContainer>
        </PetListItem>
    );
}

export interface PetObj {
    title: string;
    description: string;
    url: string;
    created: string;
}

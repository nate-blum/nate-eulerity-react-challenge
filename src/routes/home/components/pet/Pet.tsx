import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { isPetSelected, updateSelectedPets } from '../../homeSlice';

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

const PetBackground = styled.div<{ isSelected: boolean }>`
    background-color: ${props => (props.isSelected ? '#BBDEFB' : '#f8bbd0')};
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    left: 10px;
    top: 10px;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    transition: background-color 0.4s ease;
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

const PetTimeStamp = styled.p`
    font-family: 'Signika Negative';
    margin: 0;
    font-size: 13px;
    color: #424242;
`;

export function Pet(props: { pet: PetObj; id: number }) {
    const dispatch = useAppDispatch();
    const isSelected = useAppSelector(state => isPetSelected(state, props.id));

    const selected = (event: any, id: number) => {
        event.preventDefault();
        dispatch(updateSelectedPets(id));
    };

    return (
        <PetListItem isSelected={isSelected} onClick={(e: any) => selected(e, props.id)}>
            <PetBackground isSelected={isSelected}></PetBackground>
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

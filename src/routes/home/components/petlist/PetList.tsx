import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { fetchPets, selectPets } from '../../homeSlice';
import { Pet, PetObj } from '../pet/Pet';

const PetUL = styled.ul`
    list-style: none;
    text-align: center;
    margin: 0;
    padding: 0;
`;

const PetULContainer = styled.div`
    columns: 4;
    column-gap: 15px;
    padding: 0 100px;
    margin-bottom: 100px;
`;

export function PetList() {
    const dispatch = useAppDispatch();
    const pets = useAppSelector(selectPets);

    useEffect(() => {
        dispatch(fetchPets());
    }, []);

    return (
        <PetULContainer>
            <PetUL>
                {pets.map((pet: PetObj, i: number) => (
                    <Pet key={i} pet={pet} id={i} />
                ))}
            </PetUL>
        </PetULContainer>
    );
}

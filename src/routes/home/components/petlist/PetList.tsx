import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { fetchPets, selectFilter, selectPets } from '../../homeSlice';
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
    const filter = useAppSelector(selectFilter);

    useEffect(() => {
        dispatch(fetchPets());
    }, [dispatch]);

    return (
        <PetULContainer>
            <PetUL>
                {pets
                    .filter(pet =>
                        filter !== ''
                            ? pet.title.toLowerCase().includes(filter.toLowerCase()) ||
                              pet.description.toLowerCase().includes(filter.toLowerCase())
                            : true
                    )
                    .map((pet: PetObj, i: number) => (
                        <Pet key={i} pet={pet} id={i} />
                    ))}
            </PetUL>
        </PetULContainer>
    );
}

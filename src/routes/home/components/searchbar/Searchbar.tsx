import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectFilter, updateFilter } from '../../homeSlice';

const SearchbarContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding-top: 25px;
    justify-content: center;
`;

const FilterInput = styled.input`
    width: 300px;
    height: 30px;
    padding: 5px 10px;
    font-size: 16px;
    font-family: 'Signika Negative';
    border-radius: 10px;
    border: 3px solid #f8bbd0;

    & {
        outline: none !important;
    }
`;

const Instructions = styled.span`
    margin-right: 10px;
    font-family: 'Signika Negative';
`;

export function Searchbar() {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(selectFilter);

    const handleFilterValChanged = (e: any) => {
        dispatch(updateFilter(e.target.value));
    };

    return (
        <SearchbarContainer>
            <Instructions>Enter a search filter here:</Instructions>
            <FilterInput type='text' name='filter' value={filter} onChange={handleFilterValChanged}></FilterInput>
        </SearchbarContainer>
    );
}

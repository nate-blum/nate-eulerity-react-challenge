import { faCat, faCheckDouble, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { clearSelection, downloadSelectedPets, selectAllPets, selectPetsSelected } from '../../homeSlice';

const PetSelectionSection = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    font-family: 'Signika Negative';
`;

const Instructions = styled.p`
    margin-left: 100px;
    font-size: 18px;
    width: 750px;
`;

const DownloadDiv = styled.div`
    margin-left: auto;
    margin-right: 100px;
`;

const SelectedP = styled.p`
    margin: 0;
`;

const IconButton = styled.button`
    margin: 5px;
    padding: 5px;
    background-color: #f8bbd0;
    font-family: 'Signika Negative';
    border: 2px solid #f48fb1;
    border-radius: 10px;
    vertical-align: middle;
    transition: all 0.4s ease;
    cursor: pointer;

    &:hover:enabled {
        background-color: #f48fb1;
        border-color: #f06292;
    }
`;

const FAMargin = styled(FontAwesomeIcon)`
    margin-left: 5px;
    vertical-align: middle;
`;

export function PetSelection() {
    const selectedPets = useAppSelector(selectPetsSelected);
    const dispatch = useAppDispatch();

    const download = () => {
        dispatch(downloadSelectedPets());
    };

    const selectAllClicked = () => {
        dispatch(selectAllPets());
    };

    const clearSelectionClicked = () => {
        dispatch(clearSelection());
    };

    return (
        <PetSelectionSection>
            <Instructions>
                Click on any pet picture here to add it to your selection, and then you can download the selection once
                you're done.
            </Instructions>
            <DownloadDiv>
                <SelectedP>
                    {selectedPets.length} pet{selectedPets.length != 1 ? 's' : ''} currently selected
                </SelectedP>
                <IconButton onClick={download} disabled={selectedPets.length == 0}>
                    Download
                    <FAMargin icon={faCat}></FAMargin>
                </IconButton>
                <IconButton onClick={selectAllClicked}>
                    Select All
                    <FAMargin icon={faCheckDouble}></FAMargin>
                </IconButton>
                <IconButton onClick={clearSelectionClicked}>
                    Clear Selection
                    <FAMargin icon={faXmark}></FAMargin>
                </IconButton>
            </DownloadDiv>
        </PetSelectionSection>
    );
}

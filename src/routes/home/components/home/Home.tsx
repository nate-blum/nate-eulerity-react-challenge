import React from 'react';
import { MarginDiv } from '../../../../components/common-styles';
import { Navbar } from '../../../../components/navbar/Navbar';
import { PetList } from '../petlist/PetList';
import { PetSelection } from '../petselection/PetSelection';
import { Searchbar } from '../searchbar/Searchbar';

export function Home() {
    return (
        <div>
            <Navbar />
            <MarginDiv>
                <Searchbar></Searchbar>
                <PetSelection />
                <PetList />
            </MarginDiv>
        </div>
    );
}

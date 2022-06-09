import React from 'react';
import { MarginDiv } from '../../../../components/common-styles';
import { Navbar } from '../../../../components/navbar/Navbar';
import { PetList } from '../petlist/PetList';
import { PetSelection } from '../petselection/PetSelection';

export function Home() {
    return (
        <div>
            <Navbar />
            <MarginDiv>
                <PetSelection />
                <PetList />
            </MarginDiv>
        </div>
    );
}

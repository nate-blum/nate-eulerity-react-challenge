import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import { PetSelection } from './PetSelection';

describe('pet selection component', () => {
    it('should contain instructions for selecting and downloading pets', async () => {
        const renderResult = renderPetSelection();

        expect(
            await renderResult.findByText(
                /Click on any pet picture here to add it to your selection, and then you can download the selection once you're done./i
            )
        ).toBeInTheDocument();
    });

    it('should contain action buttons', async () => {
        const renderResult = renderPetSelection();

        expect(await renderResult.findAllByRole('button')).toHaveLength(3);
    });
});

function renderPetSelection() {
    return render(
        <Provider store={store}>
            <PetSelection></PetSelection>
        </Provider>
    );
}

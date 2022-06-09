import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import { PetList } from './PetList';

describe('pet list component', () => {
    it('should contain pet cards', async () => {
        const renderResult = renderPetList();

        expect((await renderResult.findAllByText(/Photo Created./i)).length).toBeGreaterThan(0);
    });
});

function renderPetList() {
    return render(
        <Provider store={store}>
            <PetList></PetList>
        </Provider>
    );
}

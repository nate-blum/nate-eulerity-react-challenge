import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import { Searchbar } from './Searchbar';

describe('searchbar component', () => {
    it('should contain an input box', async () => {
        const renderResult = renderPetSelection();
        expect(await renderResult.findByRole('textbox')).toBeInTheDocument();
    });

    it('should contain instructions', async () => {
        const renderResult = renderPetSelection();
        expect(await renderResult.findByText(/Enter a search filter here:/i)).toBeInTheDocument();
    });
});

function renderPetSelection() {
    return render(
        <Provider store={store}>
            <Searchbar></Searchbar>
        </Provider>
    );
}

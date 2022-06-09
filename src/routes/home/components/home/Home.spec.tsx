import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../../app/store';
import { Home } from './Home';

describe('home component', () => {
    it('should have a navbar', async () => {
        const renderResult = renderHome();
        expect(await renderResult.findByRole('navigation')).toBeInTheDocument();
    });

    it('should have a pet selection section', async () => {
        const renderResult = renderHome();
        expect(await renderResult.findByText(/0 pets currently selected/i)).toBeInTheDocument();
    });

    it('should have a pet list', async () => {
        const renderResult = renderHome();
        expect((await renderResult.findAllByRole('img')).length).toBeGreaterThan(0);
    });
});

function renderHome() {
    return render(
        <Provider store={store}>
            <BrowserRouter>
                <Home></Home>
            </BrowserRouter>
        </Provider>
    );
}

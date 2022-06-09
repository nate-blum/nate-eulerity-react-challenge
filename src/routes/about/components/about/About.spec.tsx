import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../../app/store';
import { About } from './About';

describe('about component', () => {
    it('should have four display pet cards', async () => {
        const renderResult = renderAbout();
        expect((await renderResult.findAllByRole('img')).length).toEqual(4);
    });

    it('should have a description', async () => {
        const renderResult = renderAbout();
        expect(await renderResult.findByText(/I’m Nathan Mintos/i)).toBeInTheDocument();
    });
});

function renderAbout() {
    return render(
        <Provider store={store}>
            <BrowserRouter>
                <About></About>
            </BrowserRouter>
        </Provider>
    );
}

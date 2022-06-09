import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { Navbar } from './Navbar';

describe('nav component', () => {
    it('should have two nav buttons', async () => {
        const renderResult = renderNav();
        expect((await renderResult.findAllByRole('listitem')).length).toEqual(2);
    });
});

function renderNav() {
    return render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar></Navbar>
            </BrowserRouter>
        </Provider>
    );
}

import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import { Pet } from './Pet';

const examplePet = {
    title: 'Tim \u0026 Jim',
    description: 'The best buds that anyone could have',
    url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?format\u003dtiny',
    created: 'Wed Jun 08 18:39:09 UTC 2022',
};

describe('pet component', () => {
    it('should have a title', async () => {
        const renderResult = renderPet();
        expect(await renderResult.findByText(examplePet.title)).toBeInTheDocument();
    });

    it('should have a description', async () => {
        const renderResult = renderPet();
        expect(await renderResult.findByText(examplePet.description)).toBeInTheDocument();
    });

    it('should have a picture', async () => {
        const renderResult = renderPet();
        expect(await renderResult.findByRole('img')).toBeInTheDocument();
    });

    it('should have a date', async () => {
        const renderResult = renderPet();
        expect(await renderResult.findByText(/2022/i)).toBeInTheDocument();
    });
});

function renderPet() {
    return render(
        <Provider store={store}>
            <Pet pet={examplePet} id={0}></Pet>
        </Provider>
    );
}

import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import { DisplayPet } from './DisplayPet';

const examplePet = {
    title: 'Zoe',
    description: 'Pillow enthusiast - also enjoys human food and head pats',
    url: '/zoe.jpg',
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
});

function renderPet() {
    return render(
        <Provider store={store}>
            <DisplayPet pet={examplePet}></DisplayPet>
        </Provider>
    );
}

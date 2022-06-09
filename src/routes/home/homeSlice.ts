import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchPetsAPI } from './api';
import { PetObj } from './components/pet/Pet';
import { saveAs } from 'file-saver';

export interface HomeState {
    pets: PetObj[];
    selectedPets: number[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: HomeState = {
    pets: [],
    selectedPets: [],
    status: 'idle',
};

export const fetchPets = createAsyncThunk('petsList.fetchPets', fetchPetsAPI);
export const selectPets = (state: RootState) => state.home.pets;

export const selectPetsSelected = (state: RootState) => state.home.selectedPets;
export const isPetSelected = (state: RootState, id: number) => state.home.selectedPets.indexOf(id) > -1;

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        updateSelectedPets: (state, action: PayloadAction<number>) => {
            let idx = state.selectedPets.indexOf(action.payload);
            if (idx > -1) state.selectedPets.splice(state.selectedPets.indexOf(action.payload), 1);
            else state.selectedPets.push(action.payload);
        },
        selectAllPets: state => {
            state.selectedPets = state.pets.map((p, i) => i);
        },
        clearSelection: state => {
            state.selectedPets = [];
        },
        downloadSelectedPets: state => {
            state.selectedPets.forEach(pet =>
                saveAs(state.pets[pet].url, state.pets[pet].url.split('/').pop()?.replace(/\?.+/, ''))
            );
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPets.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchPets.fulfilled, (state, action) => {
                state.status = 'idle';
                state.pets = action.payload;
            })
            .addCase(fetchPets.rejected, state => {
                state.status = 'failed';
            });
    },
});

export const { updateSelectedPets, selectAllPets, clearSelection, downloadSelectedPets } = homeSlice.actions;
export default homeSlice.reducer;

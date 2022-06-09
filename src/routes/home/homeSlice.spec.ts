import homeReducer, { HomeState, updateSelectedPets, selectAllPets, clearSelection, updateFilter } from './homeSlice';

describe('home reducer', () => {
    const initialState: HomeState = {
        pets: [],
        selectedPets: [],
        filter: '',
        status: 'idle',
    };

    const testPets: HomeState = {
        pets: [
            {
                title: 'Tim \u0026 Jim',
                description: 'The best buds that anyone could have',
                url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?format\u003dtiny',
                created: 'Wed Jun 08 18:39:09 UTC 2022',
            },
            {
                title: 'Barky Spears',
                description: 'Woof! I did it again',
                url: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?format\u003dtiny',
                created: 'Wed Jun 08 18:39:09 UTC 2022',
            },
        ],
        selectedPets: [0],
        filter: '',
        status: 'idle',
    };

    it('should handle initial state', () => {
        expect(homeReducer(undefined, { type: 'unknown' })).toEqual({
            pets: [],
            selectedPets: [],
            filter: '',
            status: 'idle',
        });
    });

    it('should handle selecting a new pet', () => {
        let actual = homeReducer(testPets, updateSelectedPets(1));
        expect(actual.selectedPets).toEqual([0, 1]);
    });

    it('should handle deselecting a pet', () => {
        let actual = homeReducer(testPets, updateSelectedPets(0));
        expect(actual.selectedPets).toEqual([]);
    });

    it('should handle selecting all pets', () => {
        const actual = homeReducer(testPets, selectAllPets());
        expect(actual.selectedPets).toHaveLength(actual.pets.length);
    });

    it('should handle clearing the selection', () => {
        const actual = homeReducer(initialState, clearSelection());
        expect(actual.selectedPets).toHaveLength(0);
    });

    it('should handle updating the filter', () => {
        const actual = homeReducer(initialState, updateFilter('tim'));
        expect(actual.filter).toEqual('tim');
    });
});

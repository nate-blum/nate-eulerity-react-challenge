import axios from 'axios';

export async function fetchPetsAPI() {
    return (await axios.get('http://eulerity-hackathon.appspot.com/pets')).data;
}

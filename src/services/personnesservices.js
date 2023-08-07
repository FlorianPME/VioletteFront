import { ref } from "vue";
import axios from "axios";
import router from "../router";

export default function usePersonnes() {

    const person = ref ([]);
    const people = ref([]);
    
    const getPersonnes = async () => {
        let response = await axios.get('http://localhost:8000/api/people');
        people.value = response.data.data;
    };

    const getPersonne = async (id) => {
        let response = await axios.get('http://localhost:8000/api/people/' + id);
        person.value = response.data.data;
        console.log(person.value);
    };

    
    const createPersonnes = async (data) => {
        await axios.post('http://localhost:8000/api/people', data);
        await router.push({name: 'people.list'});
    };

    const updatePersonne = async (id) => {
        await axios.put('http://localhost:8000/api/people/' + id, person.value);
        await router.push({name: 'people.list'});
    }

    return {
        person, people, getPersonnes, createPersonnes, getPersonne, updatePersonne
    }
}
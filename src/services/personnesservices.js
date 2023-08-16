import { ref } from "vue";
import axios from "axios";
import router from "../router";

export default function usePersonnes() {

    const person = ref ([]);
    const people = ref([]);
    const allMen = ref([]);
    
    const getPersonnes = async () => {
        let response = await axios.get('http://localhost:8000/api/people');
        people.value = response.data.data;
        console.log(people.value.length)
    };

    const getPersonne = async (id) => {
        console.log('get person props id : ',id)
        let response = await axios.get('http://localhost:8000/api/people/' + id);
        person.value = response.data.data;
        console.log(person.value);
    };

    
    const createPersonnes = async (data) => {
        console.log(data);
        await axios.post('http://localhost:8000/api/people', data);
        
        await router.push({name: 'people.list'});
    };

    const updatePersonne = async (id) => {
        await axios.put('http://localhost:8000/api/people/' + id, person.value);
        await router.push({name: 'people.list'});
    };

    const destroyPersonne = async (id) => {
        await axios.delete('http://localhost:8000/api/people/' + id);
        await router.push({name: 'people.list'});
        await getPersonnes();
    };

    const getAllMen = async () => {
        let response = await axios.get('http://localhost:8000/api/allmen');
        allMen.value = response.data;
        console.log(allMen);
    }

    return {
        person, people, getPersonnes, createPersonnes, getPersonne, updatePersonne, destroyPersonne, getAllMen
    }
}
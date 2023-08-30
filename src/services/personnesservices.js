import { ref } from "vue";
import axios from "axios";
import axiosClient from "axios";
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
        let response = await axios.get('http://localhost:8000/api/people/' + id);
        person.value = response.data.data;
        console.log(person.value);
    };

    
    const createPersonnes = async (data) => {
        console.log(data);

        // Si on travaille avec des objects, reconvertir en tableau d'ids
        data.locations = data.locations.map((elmt)=>elmt.id)

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

    const getPeopleByName = async (personName) =>{
        try{
            const response = await axiosClient.get(`http://localhost:8000/api/people?search=${personName}`)
            return response.data.data
        }catch(e){
            throw new Error(`Naous ne trouvous pas de personne correspondante. [function getPeopleByName ${personName}]`)
        }};


    return {
        person, people, getPersonnes, createPersonnes, getPersonne, updatePersonne, destroyPersonne, getPeopleByName
    }
}
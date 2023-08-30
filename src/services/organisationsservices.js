import { ref } from "vue";
import axios from "axios";
import axiosClient from "axios";
import router from "../router";

export default function useOrganisations() {

    const organisation = ref ([]);
    const organisations = ref([]);
    
    const getOrganisations = async () => {
        let response = await axios.get('http://localhost:8000/api/organisations');
        organisations.value = response.data.data;
    };

    const getOrganisation = async (id) => {
        let response = await axios.get('http://localhost:8000/api/organisations/' + id);
        organisation.value = response.data.data;
        console.log(organisation.value);
    };

    
    const createOrganisations = async (data) => {
        
        data.people = data.people.map((elmt)=>elmt.id)
        console.log(data);
        await axios.post('http://localhost:8000/api/organisations', data);
        
        await router.push({name: 'organisations.list'});
    };

    const updateOrganisation = async (id) => {
        await axios.put('http://localhost:8000/api/organisations/' + id, organisation.value);
        await router.push({name: 'organisations.list'});
    };

    const destroyOrganisation = async (id) => {
        await axios.delete('http://localhost:8000/api/organisations/' + id);
        await router.push({name: 'organisations.list'});
        await getOrganisations();
    };

    const getOrganisationsByName = async (organisationName) =>{
    try{
        const response = await axiosClient.get(`http://localhost:8000/api/organisations?search=${organisationName}`)
        return response.data.data
        
    }catch(e){
        throw new Error(`Nan on trouve R. [function getOrganisationsByName ${organisationName}]`)
    }
};

    return {
        organisation, organisations, getOrganisations, createOrganisations, getOrganisation, updateOrganisation, destroyOrganisation, getOrganisationsByName
    }
}
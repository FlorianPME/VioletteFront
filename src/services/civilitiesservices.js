import { ref } from "vue";
import axios from "axios";

export default function useCivilities() {
    const civility = ref([]);
    const civilities = ref([]);

    const getCivilities = async () => {
        let response = await axios.get('http://localhost:8000/api/civilities');
        civilities.value = response.data.data;
        console.log(civilities.value);
    }

    const getCivility = async () => {
        let response = await axios.get('http://localhost:8000/api/civilities/' + id);
        civility.value = response.data.data;
        console.log(civility.value);
    }

    return {
        civility, civilities, getCivilities, getCivility
    }
}
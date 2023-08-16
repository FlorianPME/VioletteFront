import { ref } from "vue";
import axios from "axios";

export default function useSectors() {
    const sector = ref([]);
    const sectors = ref([]);

    const getSectors = async () => {
        let response = await axios.get('http://localhost:8000/api/sectors');
        sectors.value = response.data.data;
        console.log(sectors.value);
    }

    const getSector = async () => {
        let response = await axios.get('http://localhost:8000/api/sectors/' + id);
        sector.value = response.data.data;
        console.log(sector.value);
    }

    return {
        sector, sectors, getSectors, getSector
    }
}
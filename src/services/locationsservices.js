import { ref } from "vue";
import axios from "axios";

export default function useLocations() {
    const location = ref([]);
    const locations = ref([]);

    const getLocations = async () => {
        let response = await axios.get('http://localhost:8000/api/locations');
        locations.value = response.data.data;
        console.log(locations.value);
    }

    const getLocation = async () => {
        let response = await axios.get('http://localhost:8000/api/locations/' + id);
        location.value = response.data.data;
        console.log(location.value);
    }

    return {
        location, locations, getLocations, getLocation
    }
}
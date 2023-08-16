<template>
    <form class="space-y-6" @submit.prevent="savePersonne">
        <div>
            <label for="civility_id" class="block" >Civilité</label>

            <input type="radio" id="civility_id" v-model="person.civility_id" value="1" />
            <label for="civility_id" class="p-1" >Mme.</label>

            <input type="radio" v-model="person.civility_id" value="2" />
            <label for="civility_id" class="p-1">M.</label>

            <input type="radio" v-model="person.civility_id" value="3" />
            <label for="civility_id" class="p-1">Autre</label>
            
            
            
        </div>
        <div>
            <label for="last_name" class="block">Nom</label>
            <input type="text" id="last_name" v-model="person.last_name">
        </div>
        <div>
            <label for="first_name" class="block">Prénom</label>
            <input type="text" id="first_name" v-model="person.first_name">
        </div>
        <div>
            <label for="email" class="block">Email</label>
            <input type="text" id="email" v-model="person.email">
        </div>
        <div>
            <label for="phone" class="block">Téléphone</label>
            <input type="text" id="phone" v-model="person.phone">
        </div>
        <label for="organisation_id" class="block">Entreprise</label>
            <select v-model="person.organisation_id">
                <option v-for="organisation in organisations" :key="organisation.id" :value="organisation.id" v-text="organisation.organisation_name"></option>
            </select>
            <div class="flex">
                <ul>Département(s) :
                    <li v-for="location in person.locations" :key="location.id" v-if="person.locations"> {{ location.location_name }} </li>
                </ul>
                <select class="p-6" v-model="person.location" multiple @change="">
                    <option v-for="location in locations" :key="location.id" :value="location.id" v-text="location.location_name"></option>
                </select>
            </div>
        <button type="submit" class="flex bg-blue-500 px-2 py-1 text-white rounded">Enregistrer les modifications</button>
    </form>
</template>
<script setup>

    import { onMounted } from "vue";
    import usePersonnes from "../services/personnesservices";
    import useOrganisations from "../services/organisationsservices";
    import useLocations from "../services/locationsservices";



    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    }) 

    const { getPersonne, person, updatePersonne } = usePersonnes();

    const { organisations, getOrganisations} = useOrganisations();

    const { location, locations, getLocations } = useLocations();


    onMounted(()=>{getPersonne(props.id)});

    const savePersonne = async () => {
        await updatePersonne(props.id);
    };

    onMounted(()=>{getOrganisations()});
    onMounted(()=>{getLocations()});


</script>
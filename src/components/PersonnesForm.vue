<template>
    <form class="space-y-6" @submit.prevent="storePersonnes">
        <div>
            <label for="civility_id" class="block" >Civilité</label>

            <input type="radio" id="civility_id" v-model="form.civility_id" value="1" />
            <label for="civility_id" class="p-1" >Mme.</label>

            <input type="radio" v-model="form.civility_id" value="2" />
            <label for="civility_id" class="p-1">M.</label>

            <input type="radio" v-model="form.civility_id" value="3" />
            <label for="civility_id" class="p-1">Autre</label>
            
            
            
        </div>
        <div>
            <label for="last_name" class="block">Nom</label>
            <input type="text" id="last_name" v-model="form.last_name">
        </div>
        <div>
            <label for="first_name" class="block">Prénom</label>
            <input type="text" id="first_name" v-model="form.first_name">
        </div>
        <div>
            <label for="email" class="block">Email</label>
            <input type="text" id="email" v-model="form.email">
        </div>
        <div>
            <label for="phone" class="block">Téléphone</label>
            <input type="text" id="phone" v-model="form.phone">
        </div>
        <div>
            <label for="organisation_id" class="block">Entreprise</label>
            <input v-model="form.organisation_id" @input="changeOrganisation" >
            <select v-model="form.organisation_id" >
                <option v-for="organisation in organisations" :value="organisation.id">
                {{ organisation.organisation_name }}
                </option>
            </select>
        </div>
        <div>
            <label for="location" class="block">Département(s) : {{ form.location }}</label>
            <select v-model="form.location" multiple>
                <option v-for="location in locations" :key="location.id" :value="location.id" v-text="location.location_name"></option>
            </select>
        </div>
        <button type="submit" class="bg-blue-500 px-2 py-1 text-white rounded">Créer la personne</button>
    </form>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue";
import usePersonnes from "../services/personnesservices";
import useOrganisations from "../services/organisationsservices";
import useLocations from "../services/locationsservices";
import router from "../router";

        const form = reactive({
            last_name: '',
            first_name: '',
            email: '',
            phone: '',
            organisation_id: '',
            location: [],
        });

        const { createPersonnes } = usePersonnes();

        const { organisation, organisations, getOrganisations, getOrganisationsByName } = useOrganisations();

        const { location, locations, getLocations } = useLocations();

        const storePersonnes = async () => {
     
            await createPersonnes({...form});
            router.push({name: 'people.list'});
        };


        const changeOrganisation = async () => {
        organisations.value = await getOrganisationsByName(form.organisation_id)
        }


        onMounted(async()=>{
             await getLocations()
        });

</script>
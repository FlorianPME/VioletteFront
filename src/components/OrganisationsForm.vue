<template>
    <form class="space-y-6" @submit.prevent="storeOrganisations">
        <div>
            <label for="organisation_name" class="block">Nom de l'entreprise</label>
            <input type="text" id="organisation_name" v-model="form.organisation_name">
        </div>
        
        <div>
            <label for="sector_id" class="block" >Secteur d'activité</label>
            
            <select v-model="form.sector_id">
                <option v-for="sector in sectors" :key="sector.id" :value="sector.id" v-text="sector.sector_name">
                   
                </option>
            </select>
            
        </div>
        
        <div>
            <label for="postal_code" class="block">Code Postal</label>
            <input type="text" id="postal_code" v-model="form.postal_code">
        </div>
        <div>
            <label for="city" class="block">Ville</label>
            <input type="text" id="city" v-model="form.city">
        </div>
        <div>
            <label for="chiffre_affaires" class="block">Chiffre d'affaire de l'année précédente en euros </label>
            <input type="text" id="chiffre_affaires" v-model="form.chiffre_affaires">
        </div>
        <div>
            <label for="person_id" class="block">Personne(s) : {{ form.person_id }}</label>
            <input v-model="full_name" @input="changePerson" >
            <select v-model="temp_person_id" @change="addPerson">
                <option value="" disabled selected>Ecrivez le nom d'une personne</option>
                <option class="disabled:text-red" v-for="person in people" :key="person.id" :value="person.id" :disabled="form.people.filter((loc)=>loc.id==person.id).length">{{person.last_name}} {{person.first_name}}</option>
            </select>
            <div>
                
                <div v-for="person in form.people" :key="person.id">
                    <p>{{person.last_name}} {{person.first_name}}</p>
                    <div @click="removePerson(person)"><p>Supprimer</p></div>
                </div>
                
            </div>
        </div>
        <button type="submit" class="bg-blue-500 px-2 py-1 text-white rounded">Créer l'entreprise</button>
    </form>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue";
import useOrganisations from "../services/organisationsservices";
import useSectors from "../services/sectorsservices";
import router from "../router";
import usePersonnes from "../services/personnesservices";
// import selected from

        const temp_person_id = ref('')
        const form = reactive({
            organisation_name: '',
            postal_code: '',
            city: '',
            chiffre_affaires: '',
            sector_id: '',
            people: [],
        });

        const addPerson = () => {
            const searchedPerson = people.value.filter((pers)=>pers.id==temp_person_id.value)[0]
            form.people.push(searchedPerson)
            form.people.sort((a,b)=>{return a.id - b.id})
            temp_person_id.value=''
        }

        const removePerson = (pers) => {
            const index = form.people.indexOf(pers)
            form.people.splice(index, 1)
        }

        const full_name = ref();

        const { person, people, getPeopleByName } = usePersonnes();

        const { createOrganisations, organisations } = useOrganisations();
        

        const { sector, sectors, getSectors } = useSectors();

        const storeOrganisations = async () => {
     
            await createOrganisations({...form});
            router.push({name: 'organisations.list'});
        };

        const changePerson = async () => {
            people.value = await getPeopleByName(full_name.value)
        }

        onMounted(()=>{getSectors()});


   

</script>
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
        <button type="submit" class="bg-blue-500 px-2 py-1 text-white rounded">Créer l'entreprise</button>
    </form>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import useOrganisations from "../services/organisationsservices";
import useSectors from "../services/sectorsservices";
import router from "../router";
// import selected from

        const form = reactive({
            organisation_name: '',
            postal_code: '',
            city: '',
            chiffre_affaires: '',
            sector_id: '',
        });


        const { createOrganisations, organisations } = useOrganisations();
        

        const { sector, sectors, getSectors } = useSectors();

        const storeOrganisations = async () => {
     
            await createOrganisations({...form});
            router.push({name: 'organisations.list'});
        };

        onMounted(()=>{getSectors()});


   

</script>
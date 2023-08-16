<template>
    <form class="space-y-6" @submit.prevent="saveOrganisation">
        <div>
            <label for="organisation_name" class="block">Nom de l'entreprise</label>
            <input type="text" id="organisation_name" v-model="organisation.organisation_name">
        </div>
        
        <div>
            <label for="sector_id" class="block" >Secteur d'activité</label>
            
            <select v-model="organisation.sector_id">
                <option v-for="sector in sectors" :key="sector.id" :value="sector.id" v-text="sector.sector_name">
                   
                </option>
            </select>
            
        </div>
        
        <div>
            <label for="postal_code" class="block">Code Postal</label>
            <input type="text" id="postal_code" v-model="organisation.postal_code">
        </div>
        <div>
            <label for="city" class="block">Ville</label>
            <input type="text" id="city" v-model="organisation.city">
        </div>
        <div>
            <label for="chiffre_affaires" class="block">Chiffre d'affaire de l'année précédente en euros </label>
            <input type="text" id="chiffre_affaires" v-model="organisation.chiffre_affaires">
        </div>
        <button type="submit" class="bg-blue-500 px-2 py-1 text-white rounded">Enregistrer les modifications</button>
    </form>
</template>
<script setup>
import { onMounted } from "vue";
import useOrganisations from "../services/organisationsservices";
import useSectors from "../services/sectorsservices";

const props = defineProps({
        id: {
            required: true,
            type: String
        }
    }) 

        const { getOrganisation, organisation, updateOrganisation } = useOrganisations();

        onMounted(()=>{getOrganisation(props.id)});
        const { sector, sectors, getSectors } = useSectors();

    const saveOrganisation = async () => {
        await updateOrganisation(props.id);
    };

    onMounted(()=>{getSectors()});
</script>
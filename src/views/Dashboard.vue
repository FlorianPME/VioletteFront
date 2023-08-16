<template>
    <div>
        <h1 class="text-xl font-bold">Bienvenue cher visiteur dont je n'ai pas pu récupérer le nom car il n'y a pas de quoi se connecter</h1>    
        <router-link to="/people/list">
            <PersonnesCard>

            </PersonnesCard>
            <OrganisationCard>
                
            </OrganisationCard>
        </router-link>
    </div>
</template>

<script setup>

import { onMounted } from "vue";
import PersonnesCard from '../components/PersonnesCard.vue';
import OrganisationCard from '../components/OrganisationCard.vue';
import usePersonnes from '../services/personnesservices';

const { getAllMen } = usePersonnes();
onMounted(async()=>{
        await getAllMen()
    });
</script>


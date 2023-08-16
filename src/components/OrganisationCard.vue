<template>
    <router-link :to="{name: 'organisations.list'}">
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"  >Il y a {{ organisations.length }} entreprises dans l'annuaire.</h5>
    
    </div>
    </router-link>
    </template>
    
    <script setup>
    import useOrganisations from '../services/organisationsservices';
    import { onMounted } from "vue";
    
    const { organisations, getOrganisations } = useOrganisations();
    onMounted(async()=>{
            await getOrganisations()
        });
    
    </script>
    
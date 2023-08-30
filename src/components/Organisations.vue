<template>

<div class="m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 display: inline-block">

    <div class="flex flex-col p-5">
        <h3 class="mb-1 text-2xl font-medium text-gray-900 dark:text-white">Nom de l'entreprise : {{ organisation.organisation_name }}</h3>
        
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white" v-if="organisation.sector">{{ organisation.sector.sector_name }}</h5>
       
        <div> Personne(s) : 
            
        <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white" v-for="person in organisation.people" :key="person.id" v-if="organisation.people" ><router-link :to="{name: 'people.details', params: { id: person.id }}">{{ person.last_name}} {{ person.first_name}}</router-link></h5>
          </div>
        <h6 class="mb-1 text-l font-medium text-gray-900 dark:text-white">Ville : {{ organisation.city}}</h6>
        <span class="text-l text-gray-500 dark:text-gray-400">Code Postal : {{organisation.postal_code}}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">Chiffre d'affaires : {{organisation.chiffre_affaires}} €</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <router-link :to="{ name: 'organisations.edit', params: { id:organisation.id }}" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</router-link>
            <button @click="destroyOrganisation(organisation.id)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Supprimer</button>
        </div>
    </div>
</div>


</template>
<script setup>
   
    import { onMounted } from "vue";
    import useOrganisations from "../services/organisationsservices";

    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    }) 

    const { getOrganisation, organisation, destroyOrganisation } = useOrganisations();

    onMounted(()=>{
        getOrganisation(props.id)
    });

</script>
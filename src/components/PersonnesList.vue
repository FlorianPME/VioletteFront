<template>
<!-- component -->
<section class="antialiased bg-gray-100 text-gray-600 h-screen px-4 bg-primary-color">
    <div class="flex flex-col justify-center h-full">
        <div class="flex">
            <router-link :to="{name: 'people.create'}" class="bg-green-500 px-2 py-1 text-white rounded">Créer une personne</router-link>
        </div>
        <!-- Table -->
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Annuaire de personnes</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Civilité</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nom</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Prénom</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <span>Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            <template v-for="person in people" :key="person.id">
                                <tr> 
                                    <td class="p-2 whitespace-nowrap">
                                    <router-link :to="{ name: 'people.details', params: { id: person.id }}" class="flex">
                                        <div class="flex items-center" v-text="person.civility_id"></div>
                                    </router-link>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                    <router-link :to="{ name: 'people.details', params: { id: person.id }}" class="flex">
                                        <div class="flex items-center" v-text="person.last_name"></div>
                                    </router-link>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                    <router-link :to="{ name: 'people.details', params: { id: person.id }}" class="flex"> 
                                        <div class="text-left" v-text="person.first_name"></div>
                                    </router-link>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <router-link :to="{ name: 'people.edit', params: { id: person.id }}">Editer</router-link>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

</template>
<script setup>
import { onMounted } from "vue";
import usePersonnes from "../services/personnesservices";


    const { people, getPersonnes } = usePersonnes();

    onMounted(async()=>{
        await getPersonnes()
    });



</script>
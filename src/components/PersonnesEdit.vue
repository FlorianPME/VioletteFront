<template>
    <form class="space-y-6" @submit.prevent="savePersonne">
        <div>
            <label for="civilite" class="block" >Civilité</label>

            <input type="radio" id="civilite" v-model="person.civilite" value="0" />
            <label for="civilite" class="p-1" >Mme.</label>

            <input type="radio" v-model="person.civilite" value="1" />
            <label for="civilite" class="p-1">M.</label>

            <input type="radio" v-model="person.civilite" value="2" />
            <label for="civilite" class="p-1">Autre</label>
            
            
            
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
        <div>
            <label for="localisation" class="block">Localisation</label>
            <input type="text" id="localisation" v-model="person.localisation">
        </div>
        <div>
            <label for="entreprise" class="block">Entreprise</label>
            <input type="text" id="entreprise" v-model="person.entreprise">
        </div>
        <button type="submit" class="bg-blue-500 px-2 py-1 text-white rounded">Enregistrer les modifications</button>
    </form>
</template>
<script setup>

    import { onMounted } from "vue";
    import usePersonnes from "../services/personnesservices";

    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    }) 

    const { getPersonne, person, updatePersonne } = usePersonnes();

    onMounted(()=>{getPersonne(props.id)});

    const savePersonne = async () => {
        await updatePersonne(props.id);
    };

</script>
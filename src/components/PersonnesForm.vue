<template>
    <form class="space-y-6" @submit.prevent="storePersonnes">
        <div>
            <label for="civilite" class="block" >Civilité</label>

            <input type="radio" id="civilite" v-model="form.civilite" value="0" />
            <label for="civilite" class="p-1" >Mme.</label>

            <input type="radio" v-model="form.civilite" value="1" />
            <label for="civilite" class="p-1">M.</label>

            <input type="radio" v-model="form.civilite" value="2" />
            <label for="civilite" class="p-1">Autre</label>
            
            
            
        </div>
        <div>
            <label for="nom" class="block">Nom</label>
            <input type="text" id="nom" v-model="form.nom">
        </div>
        <div>
            <label for="prenom" class="block">Prénom</label>
            <input type="text" id="prenom" v-model="form.prenom">
        </div>
        <div>
            <label for="email" class="block">Email</label>
            <input type="text" id="email" v-model="form.email">
        </div>
        <div>
            <label for="telephone" class="block">Téléphone</label>
            <input type="text" id="telephone" v-model="form.telephone">
        </div>
        <div>
            <label for="localisation" class="block">Localisation</label>
            <input type="text" id="localisation" v-model="form.localisation">
        </div>
        <div>
            <label for="entreprise" class="block">Entreprise</label>
            <input type="text" id="entreprise" v-model="form.entreprise">
        </div>
        <button type="submit" class="bg-blue-500 px-2 py-1 text-white rounded">Créer la personne</button>
    </form>
</template>
<script setup>
import { reactive } from "vue";
import usePersonnes from "../services/personnesservices";
import router from "../router";

        const form = reactive({
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            localisation: '',
            entreprise: '',
        });

        const { createPersonnes } = usePersonnes();

        const storePersonnes = async () => {
     
            await createPersonnes({...form});
            router.push({name: 'people.list'});
        };

</script>
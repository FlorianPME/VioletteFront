<template>
    <div>
        
        <router-link to="/people/list">
            <PersonnesCard>

            </PersonnesCard>
        </router-link>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import PersonnesCard from '../components/PersonnesCard.vue'
</script>


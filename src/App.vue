<template>
  <header class="bg-secondary-color">
        <div>
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <router-link to="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                <h1 >VIOLETTE</h1>
              </router-link>
            </div>
          </div>
        </div>
      </header>
   <div class="container w-full">
      <div class="card">
        <div class="card-body">
          <div class="container-fluid">
            <RouterView></RouterView>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

</script>
<template>
          <header class="flex bg-white p-4 shadow-md">
                <nav class="text-2xl font-bold text-teal-500">
                  <NuxtLink to="/categories">Nuxt Dojo Categories</NuxtLink>
                </nav>
          </header>
          <div class="container mx-auto p-10">
        <slot />
      </div>

      <hr class="shadow-lg">
      <footer class="container mx-auto px-10 py-32">
            <ul class="flex gap-4 text-lg font-medium">
                  <li><NuxtLink to="/">Home</NuxtLink></li>
                  <li><NuxtLink to="/about">About</NuxtLink></li>
                  <li><NuxtLink to="/categories">Categories</NuxtLink></li>
            </ul>
      </footer>
    </template>
    
    <script lang="ts" setup>

    </script>
    
    <style>
          .router-link.exact-active 
          {
                color: red;
          }
    </style>
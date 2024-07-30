<template>
      <header class="bg-white shadow-md">
            <nav class="container mx-auto flex justify-between gap-2 p-4">
                  <a href="/" class="text-2xl font-bold text-teal-500">Dojo Nuxt</a>
                  <ul class="flex gap-4">
                        <li><NuxtLink to="/">Home</NuxtLink></li>                        
                        <li><NuxtLink to="/about">About</NuxtLink></li>
                        <li><NuxtLink to="/categories">Categories</NuxtLink></li>
                        <li><NuxtLink to="/categories/abc">ABC Categories</NuxtLink></li>

                  </ul>
            </nav>
      </header>
      <div class="container mx-auto p-4">

    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
      .router-link-exact-active 
      {
            color:teal;
      } 
</style>
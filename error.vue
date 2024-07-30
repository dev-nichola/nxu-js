<template>
      <div class="mx-auto mt-7 max-w-sm text-center">
            <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
            <p class="pt-7 text-6xl">Ooops.</p>
            <div class="mt-4 rounded-md bg-gray-300 px-2 py-2 shadow-sm">
                  <p>{{ error.message }}</p>
            </div>

            <buttton @click="handleClearError" class="mt-10 block rounded-lg bg-gray-800 px-3 py-3 text-center text-gray-200" >
                  Back To Home
            </buttton>


      </div>
</template>

<script setup>
      defineProps(['error'])

      const handleClearError = () => clearError({ redirect: '/'});
</script>

<style lang="scss" scoped>

</style>
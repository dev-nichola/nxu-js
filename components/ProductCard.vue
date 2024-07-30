<template>
      <div class="card text-center">
            <img :src="product.image" alt="product thumb" class="mx-auto max-h-40">
            <p class="m-4 truncate text-base font-bold text-gray-800">{{ product.title }}</p>
            <div class="px-4 py-4">
                  <NuxtLink :to="`/categories/${product.id}`" class="flex justify-center rounded-md bg-teal-500 py-2 text-sm font-bold text-gray-200 shadow-sm transition-all hover:bg-teal-600">View Details</NuxtLink>
            </div>
            <div>
                  {{ coba }}
            </div>
      </div>
</template>

<script setup>
      const { product } = defineProps(['product']);       
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <img :src="product.image" class="h-64 w-64 object-contain" />
  </div>
  <div class="w-4/12">
    <h1 class="text-2xl font-bold">{{ product.title }}</h1>
    <p class="text-sm text-gray-600">{{ product.description }}</p>
    <p class="py-2 text-lg font-medium">Price - ${{ product.price }}</p>
    <div class="py-12 text-sm">
      <button class="flex rounded-md bg-gray-800 px-3 py-3 text-gray-200">
        <i class="material-icons mr-2">add_shopping_cart</i> <span>Add Shopping Cart</span>
      </button>
      
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
 </script>

<style lang="scss" scoped></style>

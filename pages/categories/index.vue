<template>
      <div class="text-2xl">
            <p class="py-12">Product</p>
            <div class="grid grid-cols-4 gap-5">
                  <div v-for="p in products" class="shadow-md">
                        <ProductCard :product="p"/>
                  </div>
            </div>
      </div>
    </template>
    
    <script lang="ts" setup>
      definePageMeta({
            layout: 'categories'
      });

      //fetch products
      const { data: products } = await useFetch('https://fakestoreapi.com/products');
</script>
    
    <style></style>
    
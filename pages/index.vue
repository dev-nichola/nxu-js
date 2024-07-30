<template>
  <div class="">
      <h2 class="text-2xl font-semibold">Welcome Home</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, voluptates?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium labore dolores eius eum perferendis mollitia dolorem saepe qui optio provident.</p>     
  </div>
  <div>
    <p>
      {{ data }}
    </p>
  </div>
</template>

<script setup>
const { data } = useFetch('/api/nichola');
//   method: 'post',
//   body : {age: 20 }
// });
</script>

<style scoped>

</style>
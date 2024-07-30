  <template>

    <!-- Bisa Juga Gini -->
    <Head>
      <title>Nuxt Dojo | Merch</title>
      <Meta name="description" :content="`${product.description}`"></Meta>
    </Head>
    <div class="container mx-auto flex justify-evenly">

      <ProductDetail :product="product"/>
      </div>

      
  </template>

  <script setup>
  const { id } = useRoute().params;
  const uri = `https://fakestoreapi.com/products/${id}`
  const {data: product} = await useFetch(uri, {key: id});

  definePageMeta({
    layout: "categories"
  });

  if(!product.value)
  {
    throw createError({statusCode: 404, statusMessage: "Product not found", fatal:true});
  }

  // useHead({
  //   title: "Nuxt Dojo | Merch",
  //     meta : [
  //       { name: "description", content: "Belajar Nuxt JS By Ninja Dojo" },
  //     ],
  // })
  </script>

  <style></style>

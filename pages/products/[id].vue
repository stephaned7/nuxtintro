<template>
  <div>
    <Head>
      <Title>Nuxt Intro | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>

    <ProductDetails :product="product"/>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id

const { data: product } = await useFetch(uri)

if(!product.value) {
  throw createError({
    status: 404,
    message: 'Product not found'
  })
}

definePageMeta({
  layout: "products",
});


</script>

<style scoped>
</style>
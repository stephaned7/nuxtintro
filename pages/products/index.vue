<template>
  <div>

    <h2>Product</h2>

    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p"/>
      </div>
    </div>

  </div>
</template>

<script setup>

    definePageMeta({
        layout: 'products'
    })


    const { data: products } = await useFetch('http://fakestoreapi.com/products')

    useHead({
      title: 'Nuxt intro merch',
      meta: [
        { name: 'description', content: 'Nuxt products'}
      ]
    })
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
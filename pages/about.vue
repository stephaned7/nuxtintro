<template>
  <div>

    <h2>About</h2>
    
    <pre>{{ data }}</pre>

  </div>
</template>

<script setup>

  const { data } = await useFetch('/api/example?name=john', {
    method: 'POST',
    body: { age: 30}
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
<template>
  <div class="wrapper">
  <div class="card">
  <h1 class="font-bold text-6xl ">VUE WITH TAILWIND... </h1>
  <h2 class="text-3xl font-bold">Using VueCli</h2>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{}
}
</script>

<style lang="scss" scoped>
.wrapper {
    @apply flex justify-center items-center h-screen text-red-500 bg-gray-100;
}
.card{
    @apply rounded-lg border border-red-300 bg-blue-100 p-10 shadow-lg;
}
</style>

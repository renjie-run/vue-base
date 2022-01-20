<template>
  <div class="app">{{message}}</div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        message: 'vue app.'
      };
    },
  }
</script>

<style scoped>
  .app {
    color: red;
  }
</style>

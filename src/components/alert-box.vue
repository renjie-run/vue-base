<template>
  <div class="alert-box">
    <strong>Error!</strong>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'alert-box',
};
</script>

<style scoped>
  .alert-box {
    max-width: 500px;
    padding: 10px 20px;
    background: #f3beb8;
    border: 1px solid #f09898;
  }
</style>

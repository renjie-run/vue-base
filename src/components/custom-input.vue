<template>
  <input
    type="text"
    v-bind:value="searchValue"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'custom-input',
  props: [
    'searchValue'
  ],
};
</script>

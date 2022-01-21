<template>
  <li @click="$emit('enlarge-text', 0.1)" :style="{fontSize: fontSize + 'px'}">{{ grocery.name }}</li>
</template>

<script>
export default {
  name: 'grocery',
  props: [
    'grocery',
    'fontSize',
  ],
};
</script>
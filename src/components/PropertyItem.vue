<template>
  <li class="property__inside-item">
    {{property}}
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    property: String,
  },
});
</script>

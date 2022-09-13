<template>
  <li
    class="places__option places__option--active"
    tabindex="0"
    @click="$emit('sortOptionChange', value)"
    @keydown="$emit('sortOptionChange', value)"
  >
    {{value}}
  </li>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SortOption',
  props: {
    name: String,
    value: String,
    currentSortType: String,
  },
  emits: ['sortOptionChange'],
});
</script>

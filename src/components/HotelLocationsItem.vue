<template>
  <li class="locations__item">
    <a
      class="locations__item-link tabs__item"
      :class="{'tabs__item--active': city === currentCity}"
      @click.prevent="$emit('currentCityChange', city)"
      @keydown="$emit('currentCityChange', city)"
    >
      <span>{{city}}</span>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HotelsLocationsItem',
  props: {
    city: {
      type: String,
    },
    currentCity: {
      type: String,
    },
  },
  emits: ['currentCityChange'],
});
</script>

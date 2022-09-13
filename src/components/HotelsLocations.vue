<template>
  <div class="tabs">
    <section class="locations container">
      <ul class="locations__list tabs__list">
        <hotel-locations-item
          v-for="city in locations"
          :key="city"
          :city="city"
          :currentCity="currentCity"
          @currentCityChange="$emit('currentCityChange', $event)"
        ></hotel-locations-item>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import HotelLocationsItem from './HotelLocationsItem.vue';

export default defineComponent({
  name: 'HotelsLocations',
  props: {
    locations: {
      type: Array as PropType<string[]>,
    },
    currentCity: {
      type: String,
    },
  },
  emits: ['currentCityChange'],
  components: {
    HotelLocationsItem,
  },
});
</script>

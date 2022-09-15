<template>
<section class="near-places places">
  <h2 class="near-places__title">Other places in the neighbourhood</h2>
  <div class="near-places__list places__list">
    <hotels-list-item
      v-for="hotel in nearbyHotels"
      :key="`nearby-${hotel.id}`"
      :hotel="hotel"
      :wrapperName="wrapperName"
      @onHotelHover="$emit('onHotelHover', $event)"
    ></hotels-list-item>
  </div>
</section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Hotel } from '../models';
import HotelsListItem from './HotelsListItem.vue';
import { PlaceCardClassName } from '../const/common';

export default defineComponent({
  components: { HotelsListItem },
  name: 'NearbyHotels',
  props: {
    nearbyHotels: {
      type: Array as PropType<Hotel[]>,
    },
  },
  setup() {
    const wrapperName = PlaceCardClassName.NEARBY;

    return {
      wrapperName,
    };
  },
});
</script>

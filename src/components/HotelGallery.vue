<template>
  <div class="property__gallery-container container">
    <div class="property__gallery">
      <hotel-gallery-item
        v-for="image in images"
        :key="image"
        :image="image"
      ></hotel-gallery-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import HotelGalleryItem from './HotelGalleryItem.vue';

export default defineComponent({
  components: { HotelGalleryItem },
  name: 'HotelGallery',
  props: {
    images: {
      type: Array as PropType<string[]>,
    },
  },
});
</script>

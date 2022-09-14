<template>
  <div class="property__image-wrapper">
    <img class="property__image" :src="image" alt="Photo studio">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HotelGalleryItem',
  props: {
    image: String,
  },
});
</script>

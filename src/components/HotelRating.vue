<template>
   <span :style="{width: rating}"></span>
    <span class="visually-hidden">Rating</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { convertRatingToPercent } from '../utils/common';

export default defineComponent({
  name: 'HotelsListItem',
  props: {
    ratingValue: Number,
  },
  setup(props) {
    const rating = props.ratingValue ? convertRatingToPercent(props.ratingValue) : 0;

    return {
      rating,
    };
  },
});
</script>

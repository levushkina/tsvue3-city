<template>
  <h2 class="reviews__title">
    Reviews &middot; <span class="reviews__amount">{{reviews.length}}</span>
  </h2>
    <ul class="reviews__list">
      <reviews-item
        v-for="review in reviews"
        :key="`review${review.id}`"
        :review="review"
      ></reviews-item>
    </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Reviews } from '../models';
import ReviewsItem from './ReviewsItem.vue';

export default defineComponent({
  components: { ReviewsItem },
  name: 'HotelReviews',
  props: {
    reviews: {
      type: Array as PropType<Reviews[]>,
      required: true,
    },
  },
});
</script>

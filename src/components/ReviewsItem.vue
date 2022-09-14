<template>
  <li class="reviews__item">
    <div class="reviews__user user">
      <div class="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          class="reviews__avatar user__avatar"
          :src="review.user.avatarUrl"
          width="54"
          height="54"
          alt="Reviews avatar"
        >
      </div>
      <span class="reviews__user-name">
        {{review.user.name}}
      </span>
    </div>
    <div class="reviews__info">
      <div class="reviews__rating rating">
        <div class="reviews__stars rating__stars">
          <hotel-rating :ratingValue="review.rating"></hotel-rating>
        </div>
      </div>
      <p class="reviews__text">
        {{review.comment}}
      </p>
      <time class="reviews__time" datetime="2019-04-24">April 2019</time>
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Reviews } from '../models';
import HotelRating from './HotelRating.vue';

export default defineComponent({
  components: { HotelRating },
  name: 'ReviewsItem',
  props: {
    review: {
      type: Object as PropType<Reviews>,
      required: true,
    },
  },
});
</script>

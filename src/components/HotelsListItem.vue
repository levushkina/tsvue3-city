<template>
  <article
    class="cities__place-card place-card"
    @mouseover="$emit('onHotelHover', hotel.id)"
    @focus="$emit('onHotelHover', hotel.id)"
  >
    <div
      v-if="hotel.isPremium"
      class="place-card__mark"
    >
      <span>Premium</span>
    </div>
    <div class="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          :src='hotel.previewImage'
          class="place-card__image"
          width="260"
          height="200"
          alt="Place image"
        >
      </a>
    </div>
    <div class="place-card__info">
      <div class="place-card__price-wrapper">
        <div class="place-card__price">
          <b class="place-card__price-value">&euro;{{hotel.price}}</b>
          <span class="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <bookmarks-button></bookmarks-button>
      </div>
      <div class="place-card__rating rating">
        <div class="place-card__stars rating__stars">
          <span :style="{width: rating}"></span>
          <span class="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 class="place-card__name">
        <a href="#">{{hotel.title}}</a>
      </h2>
      <p class="place-card__type">{{hotel.type}}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { computed } from '@vue/runtime-core';
import { convertRatingToPercent } from '../utils/common';
import BookmarksButton from './BookmarksButton.vue';
import { Hotel } from '../models';

export default defineComponent({
  name: 'HotelsListItem',
  props: {
    hotel: {
      type: Object as PropType<Hotel>,
      required: true,
    },
  },
  components: {
    BookmarksButton,
  },
  setup(props) {
    const rating = computed(() => convertRatingToPercent(props.hotel.rating));

    return {
      rating,
    };
  },
});
</script>

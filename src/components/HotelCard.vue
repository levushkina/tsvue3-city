<template>
  <main class="page__main page__main--property">
    <section class="property">
      <hotel-gallery :images="images"></hotel-gallery>
      <div class="property__container container">
        <div class="property__wrapper">
          <div v-if="hotel.isPremium" class="property__mark">
            <span>Premium</span>
          </div>
          <div class="property__name-wrapper">
            <h1 class="property__name">
              {{hotel.title}}
            </h1>
            <button class="property__bookmark-button button" type="button">
              <svg class="property__bookmark-icon" width="31" height="33">
                <use xlink:href="#icon-bookmark"></use>
              </svg>
              <span class="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div class="property__rating rating">
            <div class="property__stars rating__stars">
              <hotel-rating :rating-value="hotel.rating"></hotel-rating>
            </div>
            <span class="property__rating-value rating__value">{{hotel.rating}}</span>
          </div>
          <ul class="property__features">
            <li class="property__feature property__feature--entire">
              {{hotel.type}}
            </li>
            <li class="property__feature property__feature--bedrooms">
              {{hotel.bedrooms}} Bedrooms
            </li>
            <li class="property__feature property__feature--adults">
              Max {{hotel.maxAdults}} adults
            </li>
          </ul>
          <div class="property__price">
            <b class="property__price-value">&euro;{{hotel.price}}</b>
            <span class="property__price-text">&nbsp;night</span>
          </div>
          <div class="property__inside">
            <h2 class="property__inside-title">What&apos;s inside</h2>
            <ul class="property__inside-list">
              <property-item
                v-for="property in hotel.goods"
                :key="property"
                :property="property"
              ></property-item>
            </ul>
          </div>
          <div class="property__host">
            <h2 class="property__host-title">Meet the host</h2>
            <host-info :host="hotel.host"></host-info>
            <div class="property__description">
              <p class="property__text">
                {{hotel.description}}
              </p>
            </div>
          </div>
          <section class="property__reviews reviews">
            <hotel-reviews
              v-if="reviews && reviews.length"
              :reviews="reviews"
            ></hotel-reviews>
            <review-form></review-form>
          </section>
        </div>
      </div>
      <section  v-if="nearbyHotels && nearbyHotels.length" class="property__map map">
        <locations-map
          :hotels="nearbyHotels"
          :activeHotel="activeHotel"
        ></locations-map>
      </section>
    </section>
    <div class="container">
      <nearby-hotels
        v-if="nearbyHotels && nearbyHotels.length"
        :nearbyHotels="nearbyHotels"
        @onHotelHover="setCurrentHotelId($event)"
      ></nearby-hotels>
    </div>
  </main>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
} from 'vue';
import { useStore } from 'vuex';
import HotelGallery from './HotelGallery.vue';
import { Hotel } from '../models';
import HotelRating from './HotelRating.vue';
import PropertyItem from './PropertyItem.vue';
import HostInfo from './HostInfo.vue';
import HotelReviews from './HotelReviews.vue';
import ReviewForm from './ReviewForm.vue';
import NearbyHotels from './NearbyHotels.vue';
import LocationsMap from './LocationsMap.vue';
import { useActiveHotel } from '../composition/activeHotel';

export default defineComponent({
  components: {
    HotelGallery,
    HotelRating,
    PropertyItem,
    HostInfo,
    HotelReviews,
    ReviewForm,
    NearbyHotels,
    LocationsMap,
  },
  name: 'HotelCard',
  props: {
    hotel: {
      type: Object as PropType<Hotel>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const images = computed(() => props.hotel.images.slice(0, 6));
    const nearbyHotels = computed(() => store.state.nearbyHotels);
    const reviews = computed(() => store.state.reviews);

    return {
      images,
      reviews,
      nearbyHotels,
      ...useActiveHotel(nearbyHotels.value),
    };
  },
});
</script>

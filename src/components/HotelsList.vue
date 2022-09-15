<template>
  <div class="cities">
    <div class="cities__places-container container">
      <section class="cities__places places">
        <h2 class="visually-hidden">Places</h2>
        <b class="places__found">{{hotels?.length}} places to stay in {{currentCity}}</b>
        <hotel-sort-form
          :currentSortType="currentSortType"
          @sortOptionChange="$emit('sortOptionChange', $event)"
        ></hotel-sort-form>
        <div class="cities__places-list places__list tabs__content">
          <hotels-list-item
            v-for="hotel in hotels"
            :key="`hotel-${hotel.id}`"
            :hotel="hotel"
            @onHotelHover="setCurrentHotelId($event)"
          ></hotels-list-item>
        </div>
      </section>
      <div class="cities__right-section">
        <section class="cities__map map">
          <locations-map
            :hotels="hotels"
            :activeHotel="activeHotel"
          ></locations-map>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  computed,
  defineComponent,
  PropType,
  ref,
} from 'vue';
import HotelsListItem from './HotelsListItem.vue';
import HotelSortForm from './HotelSortForm.vue';
import LocationsMap from './LocationsMap.vue';
import { Hotel } from '../models';
import { getHotelById } from '../utils/common';

export default defineComponent({
  name: 'HotelsList',
  props: {
    hotels: {
      type: Array as PropType<Hotel[]>,
    },
    currentSortType: String,
    currentCity: String,
  },
  emits: ['sortOptionChange'],
  components: { HotelSortForm, LocationsMap, HotelsListItem },
  setup(props) {
    const currentHotelId = ref();

    const setCurrentHotelId = (id: number) => {
      currentHotelId.value = id;
    };
    const activeHotel = computed(() => getHotelById(props.hotels as Hotel[], currentHotelId.value));

    return {
      setCurrentHotelId,
      activeHotel,
    };
  },
});
</script>

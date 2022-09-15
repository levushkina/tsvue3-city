import { computed, ref } from 'vue';
import { getHotelById } from '../utils/common';
import { Hotel } from '../models';

export function useActiveHotel(hotels: Hotel[] = []) {
  const currentHotelId = ref();

  const setCurrentHotelId = (id: number) => {
    currentHotelId.value = id;
  };

  const activeHotel = computed(() => getHotelById(
    hotels,
    currentHotelId.value,
  ));
  return {
    setCurrentHotelId,
    activeHotel,
  };
}

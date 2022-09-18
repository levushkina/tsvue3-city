import { MAX_RATING, sortOption } from '../const/common';
import { Hotel } from '../models';

export const convertSnekeToCamelCase = (data: []): Hotel[] => JSON.parse(JSON
  .stringify(data).replace(/(_\w)\w+":/g, (match) => match[1].toUpperCase() + match.substring(2)));

export const convertRatingToPercent = (placeRating: number): string => `${(Math.round(placeRating) / MAX_RATING) * 100}%`;

export const filterHotelsByCity = (city: string, hotels: Hotel[]): Hotel[] => hotels
  .filter((hotel) => hotel.city.name === city);

export const sortHotels = (type: string, hotels: Hotel[]) => {
  switch (type) {
    case sortOption.PRICE_LOW:
      return hotels.sort((a, b) => a.price - b.price);
    case sortOption.PRICE_HIGH:
      return hotels.sort((a, b) => b.price - a.price);
    case sortOption.RATING:
      return hotels.sort((a, b) => b.rating - a.rating);
    default: return hotels.sort((a, b) => a.id - b.id);
  }
};

export const getHotelById = (hotels: Hotel[], id: number): Hotel | undefined => hotels
  .find((hotel: Hotel) => hotel.id === id);

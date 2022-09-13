export interface HotelLocation {
  latitude: number,
  longitude:number,
  zoom: number,
};

export interface Hotel {
  bedrooms: number,
  city: {
    name: string,
    location: HotelLocation,
  },
  description: string,
  goods: string[],
  host: {
    id: number,
    name: string,
    avatarUrl: string,
    isPro: boolean,
  },
  id: 1,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: HotelLocation,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  type: string,
  title: string,
};

import { City } from './city';


export type Offer = {
    'id': string;
    'previewImage': string;
    'title': string;
    'isPremium': boolean;
    'isFavorite': boolean;
    'type': string;
    'rating': number;
    'city': City;
    'numOfBedrooms': number;
    'numOfGuests': number;
    'price': number;
    'masterInf': Author;
};

export type Author = {
    'photo': string;
    'name': string;
    'isPro': boolean;
};

export type Review = {
    id: string;
    date: string;
    user: Author;
    comment: string;
    rating: number;
  }

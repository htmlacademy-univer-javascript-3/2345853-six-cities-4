/* eslint-disable react-refresh/only-export-components */
export const enum AuthStatus {
    Auth ='AUTH',
    NotAuth = 'NOT_AUTH',
    Unknown = 'UNKNOWN'
}

export const enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id'
}

export const Settings = {
  cardsNumber: 312
} as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

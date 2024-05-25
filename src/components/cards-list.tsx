import PlaceCard from './place-card';
import { Offer } from '../types/offer';

type CardsListProps = {
    citiesCards: Offer[];
    searchType: 'regular' | 'near';
};

function CardsList({citiesCards, searchType}: CardsListProps) {
  return (
    <div
      className={`${searchType === 'regular'
        ? 'cities__places-list tabs__content'
        : 'near-places__list'} places__list `}
    >
      {citiesCards.map((city) => (
        <PlaceCard key={city.id} offerInfo={city} searchType={searchType}/>
      ))}
    </div>
  );
}

export default CardsList;

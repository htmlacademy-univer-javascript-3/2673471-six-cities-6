import { Offer } from '../../types/offer';
import NearPlaceCard from '../near-place-card/near-place-card';

type NearPlacesListProps = {
  offers: Offer[];
}

export default function NearPlacesList({ offers }: NearPlacesListProps) {
  return (
    <div className='near-places__list places__list'>
      {offers.map((offer) => (
        <NearPlaceCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

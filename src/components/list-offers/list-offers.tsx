import {Offer} from '../../types/offer.ts';
import OfferCard from '../offer-card/offer-card.tsx';

type ListOffersProps = {
  offers: Offer[];
  onCardHover: (offer: Offer['id'] | null) => void;
}

export default function ListOffers(props: ListOffersProps) {
  const handleMouseOver = (offerId: Offer['id'] | null) => {
    props.onCardHover(offerId);
  };
  return (
    <>
      {props.offers.map((offer) => (
        <div
          className={'offer'}
          key={offer.id}
          onMouseEnter={() => handleMouseOver(offer.id)}
          onMouseLeave={() => handleMouseOver(null)}
        >
          <OfferCard offer={offer} />
        </div>
      ))}
    </>
  );
}

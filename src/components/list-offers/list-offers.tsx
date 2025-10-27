import {Offer} from '../../types/offer.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import {useState} from 'react';

type ListOffersProps = {
  offers: Offer[];
}

export default function ListOffers(props: ListOffersProps) {
  const [, setActiveCard] = useState<string | null>(null);
  const handleMouseOver = (offerId: string | null) => {
    setActiveCard(offerId);
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

import {OfferType} from '../../types/offer.type.ts';
import Offer, {OfferBlockStyle, OfferImageSize} from '../offer/offer.tsx';

type ListOffersProps = {
  offers: OfferType[];
  block: OfferBlockStyle;
  size: OfferImageSize;
  onCardHover: (offer: OfferType['id'] | null) => void;
}

export default function ListOffers(props: ListOffersProps) {
  const handleMouseOver = (offerId: OfferType['id'] | null) => {
    props.onCardHover(offerId);
  };
  return (
    <>
      {props.offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => handleMouseOver(offer.id)}
          onMouseLeave={() => handleMouseOver(null)}
        >
          <Offer offer={offer} block={props.block} sizeImage={props.size}/>
        </div>
      ))}
    </>
  );
}

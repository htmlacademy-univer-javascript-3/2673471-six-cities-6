import {memo} from 'react';
import {OfferType} from '../../types/offer.type.ts';
import {MemoizedOffer, OfferBlockStyle, OfferImageSize} from '../offer/offer.tsx';

type ListOffersProps = {
  offers: OfferType[];
  block: OfferBlockStyle;
  size: OfferImageSize;
  onCardHover: (offer: OfferType['id'] | null) => void;
  className: string;
}

function ListOffers(props: ListOffersProps) {
  return (
    <div className={props.className}>
      {props.offers.map((offer) => (
        <MemoizedOffer offer={offer} block={props.block} sizeImage={props.size} key={offer.id}
          onCardHover={props.onCardHover}
        />
      ))}
    </div>
  );
}

export const MemoizedListOffers = memo(ListOffers);

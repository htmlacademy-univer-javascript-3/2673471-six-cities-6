import {Offer} from '../../types/offer.ts';
import Card, {CardBlockStyle, CardImageSize} from '../card/card.tsx';

type ListOffersProps = {
  offers: Offer[];
  block: CardBlockStyle;
  size: CardImageSize;
  onCardHover: (offer: Offer['id'] | null) => void;
}

export default function ListCards(props: ListOffersProps) {
  const handleMouseOver = (offerId: Offer['id'] | null) => {
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
          <Card offer={offer} block={props.block} sizeImage={props.size}/>
        </div>
      ))}
    </>
  );
}

import './product-card.style.scss'
import {FC} from "react";

const ProductCard: FC<ProductCardProps> = ({product}) => {
  const {name, price, imageUrl} = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};


export type ProductCardProps  = {
  product: {
    id: number
    name: string
    imageUrl: string
    price: number
  }
}


export default ProductCard;


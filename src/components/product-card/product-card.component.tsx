import {FC, useContext} from "react";
import Button from "../button/button.component";
import {CartContext} from "../../contexts/cart/cart.context";
import {product} from "../../contexts/categories.context";

import './product-card.style.scss'

const ProductCard: FC<ProductCardProps> = ({product}) => {
  const {name, price, imageUrl} = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  // TODO make Button accessible by tab
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};


export interface ProductCardProps {
  product: product
}


export default ProductCard;


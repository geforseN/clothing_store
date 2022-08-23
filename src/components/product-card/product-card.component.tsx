import {FC, useContext} from "react";
import Button from "../button/button.component";
import {CartContext} from "../../contexts/cart.context";
import {product} from "../../contexts/products.context.";

import './product-card.style.scss'

const ProductCard: FC<ProductCardProps> = ({product}) => {
  const {name, price, imageUrl} = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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


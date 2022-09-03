import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";

import {CategoryItem} from "../../store/category/category.types";
import {addItemToCart} from "../../store/cart/cart.action";

import Button from "../button/button.component";

import './product-card.styles'
import {selectCartItems} from "../../store/cart/cart.selector";
import {Footer, Name, Price, ProductCartContainer} from "./product-card.styles";

const ProductCard: FC<ProductCardProps> = ({product}) => {
  const {name, price, imageUrl} = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  // TODO make Button accessible by tab
  //  REPLACE display: none to visually-hidden
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name className='name'>{name}</Name>
        <Price className='price'>{price}</Price>
      </Footer>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};


export interface ProductCardProps {
  product: CategoryItem
}


export default ProductCard;


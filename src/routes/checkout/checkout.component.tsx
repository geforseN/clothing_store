import {FC} from 'react';
import {useSelector} from "react-redux";

import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutItemsTable,
  HeaderCell,
  ItemsTableHeader,
  ItemsTableTotal,
  NoItems
} from "./checkout.styles";


const Checkout: FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return cartItems.length === 0 ? <NoItems>Cart is empty</NoItems> :
    <CheckoutContainer>
      <CheckoutItemsTable>
        <ItemsTableHeader>
          <tr>
            <HeaderCell>Image</HeaderCell>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Quantity</HeaderCell>
            <HeaderCell>Price</HeaderCell>
            <HeaderCell>Remove</HeaderCell>
          </tr>
        </ItemsTableHeader>
        <tbody>
          {cartItems.map(cartItem =>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )}
        </tbody>
        <ItemsTableTotal>
          <tr>
            <td>Total:</td>
            <td>${cartTotal}</td>
          </tr>
        </ItemsTableTotal>
      </CheckoutItemsTable>
    </CheckoutContainer>
};

export default Checkout;
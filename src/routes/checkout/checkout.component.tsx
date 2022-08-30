import {useContext} from 'react';

import {CartContext} from '../../contexts/cart/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutItemsTable,
  HeaderCell,
  ItemsTableHeader,
  ItemsTableTotal,
  NoItems
} from "./checkout.styles";

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext);

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
          {cartItems.map((cartItem) =>
            // @ts-ignore fix never
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
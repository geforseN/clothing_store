import {FC} from 'react';
import {useSelector} from "react-redux";

import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutItemsTable,
  NoItems,
  TableHeaderOneRow,
  HeaderCell,
  TableBody,
  TableTotalOneRow,
  TotalText,
  TotalCost,
} from "./checkout.styles";


const Checkout: FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const headers = ['Image', 'Name', 'Quantity', 'Price', 'Remove'];

  return cartItems.length === 0 ? <NoItems>Cart is empty</NoItems> :
    <CheckoutItemsTable>
      <TableHeaderOneRow>
        {headers.map(header =>
          <HeaderCell key={header}>{header}</HeaderCell>
        )}
      </TableHeaderOneRow>
      <TableBody>
        {cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )}
      </TableBody>
      <TableTotalOneRow>
        <TotalText colSpan={headers.length - 1}>Total:</TotalText>
        <TotalCost>${cartTotal}</TotalCost>
      </TableTotalOneRow>
    </CheckoutItemsTable>
};

export default Checkout;
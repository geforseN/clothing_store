import {useContext} from 'react';

import {CartContext} from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.style.scss';

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext);

  return cartItems.length === 0 ? (
    <div>No items is cart</div>
    ) : (
    <table className='checkout-container'>
      <thead className='checkout-header'>
        <tr >
          <th className='header-block'>
            <span>Product</span>
          </th>
          <th className='header-block'>
            <span>Description</span>
          </th>
          <th className='header-block'>
            <span>Quantity</span>
          </th>
          <th className='header-block'>
            <span>Price</span>
          </th>
          <th className='header-block'>
            <span>Remove</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          // @ts-ignore fix never
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </tbody>
      <tfoot style={{width: '100%'}}>
        <tr className='total'>
          <td>Total:</td>
          <td>${cartTotal}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Checkout;
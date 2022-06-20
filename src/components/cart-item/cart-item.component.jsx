import './cart-item.styles.scss';

const CartItem = ({ props }) => {
  const { imageUrl, price, name, quantity } = props.cartItem;

  return (
    <div className='cart-item-container'>
          <h2>{name}</h2>
          <span>{ quantity }</span>
    </div>
  );
};

export default CartItem;

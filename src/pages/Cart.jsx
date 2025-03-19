import { useLocation } from 'react-router-dom';

function Cart() {
    const { state } = useLocation();
    const { cartItems } = state || { cartItems: [] }; // ตรวจสอบว่า state มี cartItems หรือไม่

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>{item.name} - {item.price}</li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;

import React from "react";
import "./Cart.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import ReactNotification from 'react-notifications-component'

function Cart() {
	const [{cart,user},dispatch]=useStateValue();
	
	return (
		<div className="cart">
		<ReactNotification/>
			<div className="cart__left">
				<img
					className="cart__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/WatchAnywherePageUpdates_Hero_3000x600._CB435990154_.jpg"
					alt=""
				/>

				<div>
				<h3>Hello, {user?.email}</h3>
					<h2 className="cart__title">Your Shopping Cart</h2>
					{cart.map(item=>(
						<CheckoutProduct 
														
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>

			<div className="cart__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Cart;

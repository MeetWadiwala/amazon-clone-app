import React from "react";
import { store } from "react-notifications-component";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
	const [{ cart }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});

		store.addNotification({
			title: "Item Removed From The Cart",
			message: " ",
			type: "success",
			container: "top-right",
			insert: "top",
			animationIn: ["animated", "fadeIn"],
			animationOut: ["animated", "fadeOut"],

			dismiss: {
				duration: 2000,
				showIcon: true,
			},
			width: 300,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
				{!hideButton && (
					<button onClick={removeFromBasket}>Remove From Cart</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;

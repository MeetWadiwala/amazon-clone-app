import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import ReactNotification, { store } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";

function Product({ id, title, image, price, rating }) {
	// const Notify = () => {
	// 	return (
	// 		<div className="notify">
	// 			<h4>Item Added To The Cart </h4>
	// 		</div>
	// 	);
	// };

	const [{ cart }, dispatch] = useStateValue();

	console.log("cart>>>", cart);
	const addToCart = () => {
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});

		

		store.addNotification({
			title: "Item Added To The Cart",
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
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>

				<img src={image} alt="" />
			<button onClick={addToCart}>Add to Cart</button>
		</div>
	);
}

export default Product;

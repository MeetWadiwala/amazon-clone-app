import React from "react";
import "./Home.css";
import Product from "./Product";
import ReactNotification from "react-notifications-component";
import "animate.css";

import Corousel from "./Corousel";

function Home() {
	return (
		<div className="home">
			<ReactNotification />
			<div className="home__container">
				{/* <Corousel /> */}
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
					// src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB407694131_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id={1}
						title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
						rating={5}
					/>
					<Product
						id={2}
						title="Sony WHXB900N Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset - Black (WH-XB900N/B)"
						price={248}
						image="https://images-na.ssl-images-amazon.com/images/I/81OL7eorGHL._AC_SL1500_.jpg"
						rating={3}
					/>
				</div>

				<div className="home__row">
					<Product
						id={3}
						title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
						price={599.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51odsYyURHL._SL1000_.jpg"
						rating={4}
					/>
					<Product
						id={4}
						title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
						price={144.58}
						image="https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id={5}
						title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
						price={349}
						image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						id={6}
						title="Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel"
						price={8.59}
						image="https://images-na.ssl-images-amazon.com/images/I/81rjrghwlEL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id={7}
						title="Bedtime Originals Roar Dinosaur Plush Rex, Blue"
						price={9.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71KWM%2BgJoUL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id={8}
						title="Marvel's Spider-Man: Miles Morales Ultimate Launch Edition – PlayStation 5"
						price={69.88}
						image="https://images-na.ssl-images-amazon.com/images/I/71bqboqDUiL._SL1361_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						id={9}
						title="Cap Barbell Neoprene Coated Dumbbell Weights"
						price={39.33}
						image="https://images-na.ssl-images-amazon.com/images/I/71jABWNAc%2BL._AC_SL1500_.jpg"
						rating={4}
					/>
					<Product
						id={10}
						title="Gtracing Gaming Chair Racing Office Computer Ergonomic Video Game Chair Backrest and Seat Height Adjustable Swivel Recliner with Headrest and Lumbar Pillow Esports Chair (Red)"
						price={129.99}
						image="https://images-na.ssl-images-amazon.com/images/I/619sWFsXJ%2BL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id={11}
						title="A Promised Land Kindle Edition by Barack Obama"
						price={17.99}
						image="https://m.media-amazon.com/images/I/41nzI1lhIVL.jpg"
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id={12}
						title="Lenovo IdeaPad 3 14 Laptop, 14.0 FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue"
						price={423.81}
						image="https://images-na.ssl-images-amazon.com/images/I/81Or1kS3UmL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id={13}
						title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10, A515-43-R19L, Silver"
						price={364.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id={14}
						title="Bose QuietComfort Noise Cancelling Earbuds - True Wireless Earphones, Triple Black. The world's Most Effective Noise Cancelling Earbuds."
						price={79.99}
						image="https://images-na.ssl-images-amazon.com/images/I/611qu2aEn1L._AC_SL1384_.jpg"
						rating={3}
					/>
				</div>

				<div className="home__row">
					<Product
						id={15}
						title="Sony X800H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
						price={753.51}
						image="https://images-na.ssl-images-amazon.com/images/I/71%2BF%2BeS7qfL._AC_SL1080_.jpg"
						rating={5}
					/>
					<Product
						id={16}
						title="Apple AirPods with Charging Case (Wired)"
						price={264.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
						rating={5}
					/>
					<Product
						id={16}
						title="Sony Wireless in-Ear Headset/Headphones with Mic for Phone Call, Black (WI-C310/B)"
						price={18.0}
						image="https://images-na.ssl-images-amazon.com/images/I/51bzFkVSi2L._AC_SL1500_.jpg"
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id={6}
						title='Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6" Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812'
						price={714}
						image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

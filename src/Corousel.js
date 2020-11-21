import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Corousel() {
    return (
        <div
					id="carouselExampleControls"
					className="carousel slide"
					data-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100 home__image"
								src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
								alt="First slide"
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100 home__image"
								src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
								alt="Second slide"
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100 home__image"
								src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
								alt="Third slide"
							/>
						</div>
					</div>
					<Link
						className="carousel-control-prev"
						to="#carouselExampleControls"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Previous</span>
					</Link>
					<Link
						className="carousel-control-next"
						to="#carouselExampleControls"
						role="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Next</span>
					</Link>
				</div>
    )
}

export default Corousel

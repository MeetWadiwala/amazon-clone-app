import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header({ title }) {
	const history = useHistory();
	const [search, setSearch] = useState("");
	const [{ cart, user }, dispatch] = useStateValue();

	const searchEvent = (event) => {
		const sdata = event.target.value;
		console.log(sdata);
		setSearch(sdata);
	};

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	console.log('title>>',title);
	// const filterItems=

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
				/>
			</Link>

			<div className="header__search">
				<input
					className="header__searchInput"
					type="text"
					value={search}
					onChange={searchEvent}
				/>
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div onClick={handleAuthentication} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>

				<div className="header__option">
					<span
						className="header__optionLineOne"
						onClick={"https://www.primevideo.com/"}
					>
						Your
					</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<Link to="/cart">
					<div className="header__optionBasket">
						<AddShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{cart?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;

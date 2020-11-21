import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	// const register = (e) => {
	// 	e.preventDefault();

	// 	auth
	// 		.createUserWithEmailAndPassword(email, password)
	// 		.then((auth) => {
	// 			console.log(auth);
	// 			if (auth) {
	// 				history.push("/");
	// 			}
	// 		})
	// 		.catch((error) => alert(error.message));
	// };

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>
				<form>
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button onClick={signIn} className="login__signInButton">
						Sign In
					</button>
				</form>
				<p>
					By continuing, you agree to Amazon's Conditions of Use and Privacy
					Notice.
				</p>
			</div>
			<h5 className="lineThrough">
				<span>New to Amazon?</span>
			</h5>
			<Link to="/register">
				<button className="login__registerButton">
					Create your Amazon account
				</button>
			</Link>
		</div>
	);
}

export default Login;

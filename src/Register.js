import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Register.css";

function Register() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repassword, setRepassword] = useState("");
	const [name, setName] = useState("");

	const register = (e) => {
		e.preventDefault();

		if (password === repassword) {
			auth
				.createUserWithEmailAndPassword(email, password)
				.then((auth) => {
					console.log(auth);
					if (auth) {
						history.push("/");
					}
				})
				.catch((error) => alert(error.message));
		} else {
			alert("Passwords do not match");
		}
	};

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
				<h1>Create account</h1>
				<form>
					<h5>Your name</h5>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
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
						placeholder="At least 6 characters"
						onChange={(e) => setPassword(e.target.value)}
						minLength={6}
						required
					/>
					<h5>Re-enter password</h5>
					<input
						type="password"
						value={repassword}
						onChange={(e) => setRepassword(e.target.value)}
						required
					/>

					<button onClick={register} className="login__signInButton">
						Create your Amazon account
					</button>
				</form>
				<p>
					By creating an account, you agree to Amazon's Conditions of Use and
					Privacy Notice.
				</p>
				<br />
				<hr />
				<p className="already__account">
					Already have an account?
					<span>
						<Link className="signIn__link" to="/login">
							{" "}
							Sign-In
						</Link>
					</span>
				</p>
			</div>
		</div>
	);
}

export default Register;

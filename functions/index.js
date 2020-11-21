const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51HoVEXDL75UK1fGIm2LyQLqyrLJ7ygG12mT88OvzwDcGocxW4gxhtcTVaeHDODVeqMJWnZPGlSJY4QFSOpUpsnqi00wlIe8JFy"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("payment request recieved>>>", total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "inr",
	});
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-ced81/us-central1/api

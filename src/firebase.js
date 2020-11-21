import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD9fGO7PdaDlmY_2_Vkyk1MIivnxjmC3Bg",
	authDomain: "clone-ced81.firebaseapp.com",
	databaseURL: "https://clone-ced81.firebaseio.com",
	projectId: "clone-ced81",
	storageBucket: "clone-ced81.appspot.com",
	messagingSenderId: "857026491673",
	appId: "1:857026491673:web:54308fd45ad619f9050188",
	measurementId: "G-5B420NWQTL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

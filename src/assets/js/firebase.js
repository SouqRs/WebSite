// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCqdOxv8WlI90ZeLZHjPOXtm0BWib935gM",
	appId: "1:686609704824:web:f90dcd21825de0d2744a8d",
	authDomain: "souqrs.firebaseapp.com",
	databaseURL: "https://souqrs-default-rtdb.firebaseio.com/",
	measurementId: "G-8719G8T6RB",
	messagingSenderId: "686609704824",
	projectId: "souqrs",
	storageBucket: "souqrs.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);

importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');
import swal from 'sweetalert';




// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAKSFlv_nth7xx51AT5Zf6ELZdryEUZ0k8",
  authDomain: "gaalguishop.firebaseapp.com",
  projectId: "gaalguishop",
  storageBucket: "gaalguishop.appspot.com",
  messagingSenderId: "395948321414",
  appId: "1:395948321414:web:1f23d4fbb76f7d777a7f07"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
 // console.log('Received background message ', payload);
   swal( payload.data.titre + '\n\n' 
    +payload.data.body )
  

 
});
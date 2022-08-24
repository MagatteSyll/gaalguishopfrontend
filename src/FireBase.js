import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import swal from 'sweetalert';


var firebaseConfig = {
  apiKey: "AIzaSyAKSFlv_nth7xx51AT5Zf6ELZdryEUZ0k8",
  authDomain: "gaalguishop.firebaseapp.com",
  projectId: "gaalguishop",
  storageBucket: "gaalguishop.appspot.com",
  messagingSenderId: "395948321414",
  appId: "1:395948321414:web:1f23d4fbb76f7d777a7f07"
};
initializeApp(firebaseConfig);
const messaging = getMessaging();
export const requestForToken = () => {
  return getToken(messaging, { vapidKey:"BE_TlKzjr6C52EEVsyJWYWCPPZVho_UdSDsKy2Gx2as8dQevvItT8xUCJIkaPnaiiLGD6_D_E5EoXrrcv3votao" })
    .then((currentToken) => {
      if (currentToken) {
        //console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
        return currentToken
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        return 
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      return
    });
};
const open=true

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
    //console.log('Received foreground message ', payload);
    swal( payload.data.titre + '\n\n' 
    +payload.data.body )
 
    //  resolve(payload);
    });
});
 


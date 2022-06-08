importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
	apiKey: "AIzaSyAM8VHKpPGrAualEtCG4izRM51yJ5GorPc",
    authDomain: "wbywebssite.firebaseapp.com",
    projectId: "wbywebssite",
    storageBucket: "wbywebssite.appspot.com",
    messagingSenderId: "61153863310",
    appId: "1:61153863310:web:e0e57c59c9355224894bdf",
    measurementId: "G-XPRZ978LR2"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
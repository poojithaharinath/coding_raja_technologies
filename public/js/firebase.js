let firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyDdZ3G0JvuGRmA88cl-uLhQZoeS4dMYef0",
        authDomain: "blogging-website-13c52.firebaseapp.com",
        projectId: "blogging-website-13c52",
        storageBucket: "blogging-website-13c52.appspot.com",
        messagingSenderId: "384368661647",
        appId: "1:384368661647:web:d6a732379e72fd3a718cfa",
        measurementId: "G-5Y28JKRMZP"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBbMolU6UGW0kpLIe0Vq6Of2jqTHjn3C10",
    authDomain: "projectmanager-007.firebaseapp.com",
    projectId: "projectmanager-007",
    storageBucket: "projectmanager-007.appspot.com",
    messagingSenderId: "145512861458",
    appId: "1:145512861458:web:986b6eb2e9422dbb7badcb"
    };

    firebase.initializeApp(firebaseConfig)

    const projectFirestore=firebase.firestore()
    const projectAuth=firebase.auth()
    const projectStorage=firebase.storage()

    const timestamp =firebase.firestore.Timestamp

    export {projectAuth,projectFirestore,projectStorage,timestamp}

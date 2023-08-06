import { initializeApp} from 'firebase/app'
import { getAuth} from 'firebase/auth'


const firebaseConfig = {
   apiKey:process.env.REACT_APP_FIERBASE_API_KEY || "AIzaSyCkRRj9OnH0SiCME16l-zoLizZRNEMtJFE",
   authDomain:process.env.REACT_APP_FIERBASE_AUTH_DOMAIN,
   projectId:process.env.REACT_APP_FIERBASE_PROJECT_ID,
   storageBucket:process.env.REACT_APP_FIERBASE_STORAGE_BUCKET,
   messagingSenderId:process.env.REACT_APP_FIERBASE_MESSAGING_SENDER_ID,
   appId:process.env.REACT_APP_FIERBASE_APP_ID,
 };


 const app =initializeApp(firebaseConfig)

 const auth = getAuth(app)

 export default auth

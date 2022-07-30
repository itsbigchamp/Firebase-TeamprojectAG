import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore} from 'firebase-admin/firestore';
import { credentials } from "../credentials.js";

export function connectdb() {
    if(!getApps().length){
        initializeApp({
            credential: cert(credentials)
        });
    }return getFirestore();
}

import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// 1) Paste YOUR Firebase web config here (Firebase Console > Project settings > Your apps)
const cfg={apiKey:"AIzaSyBCJuScdNIDvYvLbcDhy21fOCRYP_4EPso",authDomain:"freelancer-world-96371.firebaseapp.com",projectId:"freelancer-world-96371",storageBucket:"freelancer-world-96371.firebasestorage.app",messagingSenderId:"112819424328",appId:"1:112819424328:web:bb4305179ec1e8b870dc7d"};
// 2) Your admin email (also put it in firestore.rules)
export const ADMIN_EMAIL="mmbnb2022@gmail.com";
const app=initializeApp(cfg);
export const auth=getAuth(app), db=getFirestore(app);
export const $=s=>document.querySelector(s);
export const money=n=>"$"+Number(n||0).toFixed(2);
export const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

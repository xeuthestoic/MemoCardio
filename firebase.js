import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv7t3t8hpAxPbrA2IVVuk2lwXJcI-Pfhs",
  authDomain: "memocardio-2f462.firebaseapp.com",
  projectId: "memocardio-2f462",
  appId: "1:526966657010:web:50e7b908aa13926456e56b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

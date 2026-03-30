import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "TON_API_KEY",
  authDomain: "TON_PROJECT.firebaseapp.com",
  projectId: "memocardio-2f462",
  appId: "TON_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

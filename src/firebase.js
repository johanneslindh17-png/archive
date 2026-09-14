import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// ── Replace these values with your Firebase project config ───────────────────
// firebase.google.com → your project → Project settings → Your apps → Web app
const firebaseConfig = {
  apiKey:            "PASTE_API_KEY_HERE",
  authDomain:        "PASTE_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://PASTE_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "PASTE_PROJECT_ID",
  storageBucket:     "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_SENDER_ID",
  appId:             "PASTE_APP_ID",
};

const configured = !firebaseConfig.apiKey.startsWith('PASTE');
export const db = configured ? getDatabase(initializeApp(firebaseConfig)) : null;

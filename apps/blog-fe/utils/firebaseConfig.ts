import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
} from "firebase/auth";

const apps = getApps();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = apps.length ? apps[0] : initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
// Initialize Microsoft OAuth Provider
export const microsoftProvider = new OAuthProvider("microsoft.com");

// You can optionally add custom scopes if needed
microsoftProvider.setCustomParameters({
  prompt: "select_account", // This will ask the user to select an account each time
});

// Example of adding custom scopes for Microsoft Graph API (optional)
microsoftProvider.addScope("User.Read");

// Logout method
export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

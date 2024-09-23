import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'tripeer-99eb2.firebaseapp.com',
  projectId: 'tripeer-99eb2',
  storageBucket: 'tripeer-99eb2.appspot.com',
  messagingSenderId: '542997628607',
  appId: '1:542997628607:web:3f825620b9da013d4f680a',
  measurementId: 'G-6SC5BFVPMD',
};

let app: any = null;
let message: any = null;

const getFCMToken = async () => {
  let fcmToken = '';
  if (!app && !message) {
    app = initializeApp(firebaseConfig);
    message = getMessaging(app);
  }
  const permission = await requestPermission();
  if (permission !== 'granted') return null;
  try {
    fcmToken = await getToken(message, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    });
  } catch {
    fcmToken = await getToken(message, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    });
  }
  return fcmToken;
};

const requestPermission = async () => {
  const permission = await Notification.requestPermission();
  return permission.toString();
};

export { getFCMToken, requestPermission };

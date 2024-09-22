importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js',
);

/*self.addEventListener('notificationclick', (e) => {
	const { content, title, type } = e.notification.data
	if (type == 'MESSAGE') {
		clients.openWindow('https://k10d203.p.ssafy.io/')
	} else {
		clients.openWindow('https://k10d203.p.ssafy.io/announcement')
	}
})*/

firebase.initializeApp({
  apiKey: 'AIzaSyBkouUtcWSQc64zBZ82ZW2vwDpWEAlRns0',
  authDomain: 'tripeer-99eb2.firebaseapp.com',
  projectId: 'tripeer-99eb2',
  storageBucket: 'tripeer-99eb2.appspot.com',
  messagingSenderId: '542997628607',
  appId: '1:542997628607:web:3f825620b9da013d4f680a',
  measurementId: 'G-6SC5BFVPMD',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // 백그라운드 메세지 핸들러, 백그라운드 메세지는 Service-worker에서만 작동함!
  console.log('payload : ', payload);
  // const notificationTitle = 'Background Message Title'; // 메세지 제목
  const { content, title } = payload.data;
  const notificationOptions = {
    body: content, // 매세지 내용
    icon: '/firebase-logo.png', // 로고 이미지 들어가는곳
    data: payload.data,
  };

  self.registration.showNotification(title, notificationOptions);
});

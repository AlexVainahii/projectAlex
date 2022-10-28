import { refs } from './refs';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDRjTFbmRann_cr3ckzqO-WJzrN46pmMNY',
  authDomain: 'ultimate-choir-311114.firebaseapp.com',
  projectId: 'ultimate-choir-311114',
  storageBucket: 'ultimate-choir-311114.appspot.com',
  messagingSenderId: '747352375066',
  appId: '1:747352375066:web:bfd52aa1c7f0703dcff6a3',
  measurementId: 'G-XPVPECFXHK',
}; 

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
function closeModal() {
  refs.bckDrop.classList.add('is-hidden');
}

refs.signBtn.addEventListener('click', () => {
  refs.bckDrop.classList.remove('is-hidden');
});
refs.closeBtn.addEventListener('click', closeModal);

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('q2CB69dgI1msEJq8g6ji')
  .collection('cartitems')
  .doc('XHQD6VD5qjVuTcFg6NaI');

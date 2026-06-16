import { initializeApp } from 'firebase/app';

import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

import { firebaseConfig } from '../secrets';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Example array of objects to be added to a document

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const newField = async (documentId: string, name: string, arrayOfObjects: any[]) => {
  const docRef = doc(db, 'data', documentId);
  try {
    await updateDoc(docRef, { [name]: arrayOfObjects });
    console.log('Array of objects successfully added to the document!');
  } catch (error) {
    console.error('Error adding array of objects: ', error);
  }
};

export const fetchSingleDocument = async (collectionName: string, documentId: string) => {
  console.log(firebaseConfig);
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
    console.log('Document ID:', docSnap.id);

    return docSnap.data();
    // You can also get the document ID directly from the snapshot
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
    return null;
  }
};

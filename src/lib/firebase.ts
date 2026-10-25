import { initializeApp } from 'firebase/app';

import { arrayUnion, collection, getDocs, getFirestore } from 'firebase/firestore';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

import { firebaseConfig } from '../lib/secrets';

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
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log('Document data:', docSnap.data());
    // console.log('Document ID:', docSnap.id);

    return docSnap.data();
    // You can also get the document ID directly from the snapshot
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
    return null;
  }
};

interface Project {
  id: number;
  projectName: string;
  description: string;
  alt: string;
  url: string;
  github: string;
  projectImage: string;
  isLive: boolean;
}

export const addProject = async (project: Project, documentId: string) => {
  try {
    const projectRef = doc(db, 'data', documentId);

    await updateDoc(projectRef, {
      projects: arrayUnion(project),
    });
    console.log('Project added successfully!');
  } catch (error) {
    console.error('Error adding project:', error);
  }
};

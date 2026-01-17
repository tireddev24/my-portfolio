// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { collection, getDocs, getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv0g_FxwVy-VgST7ZcyW0RoCGZX99BDiU",
  authDomain: "my-portfoilio-1ed5c.firebaseapp.com",
  projectId: "my-portfoilio-1ed5c",
  storageBucket: "my-portfoilio-1ed5c.firebasestorage.app",
  messagingSenderId: "927612951484",
  appId: "1:927612951484:web:bd2b845e8a8f8a6322a9b9",
  measurementId: "G-K426P1TZVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const addData = async (data) => {
  try {
    await setDoc(doc(db, "data", "personal"), data);
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

// Example array of objects to be added to a document

export const addArrayOfObjects = async (newDocumentData) => {
  try {
    const docRef = doc(db, "data", "links");
    await setDoc(docRef, newDocumentData);

    console.log(
      "New document with array of objects added with ID: ",
      docRef.id
    );
    console.log("Array of objects successfully added to the document!");
  } catch (error) {
    console.error("Error adding array of objects: ", error);
  }
};

// Example of adding a single object to the array later

export const addSingleObjectToArray = async (singleNewItem) => {
  const docRef = doc(db, "data", "personal");

  try {
    await updateDoc(docRef, singleNewItem);
    console.log("Single object successfully added to the array!");
  } catch (error) {
    console.error("Error adding single object: ", error);
  }
};

export const fetchSingleDocument = async (collectionName, documentId) => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    console.log("Document ID:", docSnap.id);

    return docSnap.data();
    // You can also get the document ID directly from the snapshot
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

// Assuming 'app' is your initialized Firebase app
const myCollectionRef = collection(db, "data");

const allDocuments = [];

export async function fetchData() {
  const querySnapshot = await getDocs(myCollectionRef);

  const personalData = { data: {} };
  const projectsData = [];

  querySnapshot.forEach((doc) => {
    if (doc.id === "personal") {
      const data = doc.data(); // Cast to your expected type
      const id = doc.id;
      // console.log(`Document ID: ${id}, Data:`, data);
      personalData.data = { ...data, id };

      // Store the data in an array, perhaps for displaying in a list
      allDocuments.push({ ...data, id });
    } else if (doc.id === "projects") {
      const data = doc.data(); // Cast to your expected type
      const id = doc.id;
      projectsData.push({ ...data, id });
    }
  });

  return { personal: personalData, projects: projectsData };
}

// fetchData();

// console.log(allDocuments);

import { useEffect, useState } from 'react';
import { db } from '../libs/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
const useFirestore = (imgCol) => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllDocs = async () => {
      const colRef = await collection(db, imgCol);
      const unsunb = onSnapshot(colRef, (snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        setLoading(false);
      });

      return unsunb;
    };
    getAllDocs();
  }, [imgCol]);

  return { docs, loading };
};

export default useFirestore;

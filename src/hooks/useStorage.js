import { useEffect, useState } from 'react';
import { storage, timesTamp, db } from '../libs/firebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const imageRef = ref(storage, file.name);
    const uploadImage = uploadBytesResumable(imageRef, file);
    const colRef = collection(db, 'gallery');
    uploadImage.on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await getDownloadURL(imageRef);
        setUrl(url);
        await addDoc(colRef, { url, createdAt: timesTamp });
      }
    );
  }, [file]);

  return { url, progress, error };
};
export default useStorage;

import React from 'react';
import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ files, setFiles }) => {
  const { progress, url } = useStorage(files);
  console.log(`Progressed ${progress} with URL: ${url}`);

  useEffect(() => {
    if (url) {
      setFiles(null);
    }
  }, [url, setFiles]);
  return (
    <div
      className="h-[5px] rounded-sm bg-red-300"
      style={{ width: progress + '%' }}
    ></div>
  );
};

export default ProgressBar;

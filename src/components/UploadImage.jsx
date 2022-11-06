import React, { useState } from 'react';
import { HiUpload } from 'react-icons/hi';
import ProgressBar from './ProgressBar';
const UploadImage = () => {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const types = ['image/jpeg', 'image/png', 'image/jpg'];

    const selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFiles(selectedFile);
      setError('');
    } else {
      setFiles(null);
      setError('Please Select Image (png,jpg, jpeg)');
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mb-5">
      <form>
        <label className="border-red-500 rounded-md h-4 cursor-pointer">
          <input
            onChange={handleChange}
            type="file"
            className="h-0 w-0 opacity-0"
          />
          <HiUpload className="text-2xl text-gray-500" />
        </label>
      </form>
      <div className="mt-4">
        <h3 className="text-gray-500 text-sm font-normal mb-2">
          {files?.name}
        </h3>
        <p className="text-red-500 text-xl font-light">{error}</p>
        {files && <ProgressBar files={files} setFiles={setFiles} />}
      </div>
    </div>
  );
};

export default UploadImage;
